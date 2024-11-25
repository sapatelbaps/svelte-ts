import type { GetShippingActivityXMLResponse, ShippingActivity } from '$lib/types/shipping';
import { EmptyXMLNode } from '$lib/types/vc-xml';
import type { RequestHandler } from '@sveltejs/kit';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { config } from 'dotenv';

config();

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { startDate, endDate } = await request.json();
		const apiUsername = process.env.VC_API_USERNAME;
		const apiPassword = process.env.VC_API_PASSWORD;

		if (!apiUsername || !apiPassword) {
			return new Response('API credentials are required', { status: 400 });
		}

		const shippingActivityRequest = {
			'?xml': EmptyXMLNode,
			'soap12:Envelope': {
				'@_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
				'@_xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
				'@_xmlns:soap12': 'http://www.w3.org/2003/05/soap-envelope',
				'soap12:Header': {
					AuthenticationHeader: {
						'@_xmlns': 'http://sma-promail/',
						Username: apiUsername,
						Password: apiPassword
					}
				},
				'soap12:Body': {
					GetShippingActivity: {
						'@_xmlns': 'http://sma-promail/',
						StartDate: startDate,
						EndDate: endDate
					}
				}
			}
		};

		const builder = new XMLBuilder({ attributeNamePrefix: '@_', ignoreAttributes: false });
		const reqXmlContent = builder.build(shippingActivityRequest);
		// console.log(reqXmlContent);

		let responseXML = await getVeracoreShipments(reqXmlContent);
		const parser = new XMLParser();

		let shipments = parser.parse(responseXML) as GetShippingActivityXMLResponse;
		const shipmentsData =
			shipments['soap:Envelope']['soap:Body'].GetShippingActivityResponse.GetShippingActivityResult
				.ShippingActivity;
		/* .filter(
			(shipment: ShippingActivity) => shipment.ActualFreight !== 0
		); */

		return new Response(JSON.stringify(shipmentsData), {
			headers: { 'Content-Type': 'application/json' }
		});
	} catch (error) {
		console.error('Error processing request:', error);
		return new Response('Internal Server Error', { status: 500 });
	}
};

async function getVeracoreShipments(requestXML: string): Promise<string> {
	const response = await fetch('https://fulfillment.hemlockharling.com/pmomsws/order.asmx', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/soap+xml; charset=utf-8',
			Namespace: 'sma-promail',
			Encoding: 'UTF-8',
			SOAPAction: 'http://omscom/GetShippingActivity'
		},
		body: requestXML
	});

	return await response.text();
}
