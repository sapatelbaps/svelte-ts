// vs-order/+server.ts
import type { RequestHandler } from '@sveltejs/kit';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { config } from 'dotenv';
import type { AddOrderXMLRequest, AddOrderXMLResponse } from '$lib/types/order';
import { EmptyXMLNode } from '$lib/types/vc-xml';

config();

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const apiUsername = process.env.VC_API_USERNAME;
	const apiPassword = process.env.VC_API_PASSWORD;

	if (!apiUsername || !apiPassword) {
		return new Response('API credentials are required', { status: 400 });
	}

	// Business logic goes here
	const orderId = 123456;
	let message = '';

	const newOrderRequest: AddOrderXMLRequest = {
		'?xml': EmptyXMLNode,
		'soap12:Envelope': {
			'@_xmlns:soap12': 'http://www.w3.org/2003/05/soap-envelope',
			'@_xmlns:xsd': 'http://www.w3.org/2001/XMLSchema',
			'@_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
			'soap12:Header': {
				AuthenticationHeader: {
					'@_xmlns': 'http://sma-promail/',
					Username: apiUsername,
					Password: apiPassword
				}
			},
			'soap12:Body': {
				AddOrder: {
					'@_xmlns': 'http://sma-promail/',
					order: {
						Header: {
							ID: 'HMP-999999',
							EntryDate: new Date().toISOString(),
							InsertDate: new Date().toISOString(),
							ReferenceNumber: 'HMP-SOR000099999',
							PONumber: '09999999',
							Comments: 'pdf file path 1'
						},
						Classification: {
							Vendor: 'store name',
							Department: 'clearing module data',
							Store: 'storeId'
						},
						Money: {
							PriceClass: {
								SeqID: 1,
								Description: 'default'
							}
						},
						OrderedBy: {
							FullNameWithSuffix: 'Cincinnati Childrens Hospital',
							FullName: 'Gift Shop',
							Email: 'developer@hemlock.com',
							UID: 'Sandip',
							TaxExempt: false,
							TaxExemptApproved: false,
							CommercialName: false,
							Phone: '(513)793-8289',
							CompanyName: 'Cincinnati Childrens Hospital',
							Address1: '3333 Burnet Ave',
							Address2: '',
							City: 'Cincinnati',
							State: 'OH',
							PostalCode: '45229',
							Country: 'USA',
							CompoundAddress: 'SUPPORT@hemlock.com'
						},
						ShipTo: {
							OrderShipTo: [
								{
									SeqID: 1,
									FullName: 'Cincinnati Childrens Hospital',
									Address1: '3333 Burnet Ave',
									Address2: '',
									City: 'Cincinnati',
									State: 'OH',
									PostalCode: '45229',
									CityStateZip: '45229',
									Country: 'USA',
									CityStateZipCountry: 'USA',
									Phone: '(513)793-8289',
									Fax: '222-333-4444',
									CompanyName: 'Cincinnati Childrens Hospital',
									Comments: 'Gift shop - special instructions',
									Key: '0',
									SpecialHandling: {
										Description: 'Canada Air'
									},
									Rush: false,
									RushHandling: 0
								}
							]
						},
						BillTo: {
							FullNameWithSuffix: 'Cincinnati Childrens Hospital',
							FullName: 'Gift Shop',
							Email: 'developer@hemlock.com',
							UID: 'Sandip',
							TaxExempt: false,
							TaxExemptApproved: false,
							CommercialName: false,
							Phone: '(513)793-8289',
							CompanyName: 'Cincinnati Childrens Hospital',
							Address1: '3333 Burnet Ave',
							Address2: '',
							City: 'Cincinnati',
							State: 'OH',
							PostalCode: '45229',
							Country: 'USA',
							CompoundAddress: 'SUPPORT@hemlock.com'
						},
						Offers: {
							OfferOrdered: [
								{
									SeqID: 1,
									Offer: {
										Header: {
											ID: 'DC6599-9'
										}
									},
									OrderShipToKey: {
										Key: '0'
									},
									Quantity: 3,
									UnitPrice: 1.1,
									PriceType: 0,
									ShippingHandling: 7.77,
									LineTaxPercent: 1.234,
									Discounts: 0,
									LineNumber: 1,
									Comments: 'special instructions or pdf file path 3',
									ProductDetails: [
										{
											ClusterNumber: 'DC6599-9',
											PartNumber: '123456'
										}
									]
								},
								{
									SeqID: 2,
									Offer: {
										Header: {
											ID: 'DC6616-3'
										}
									},
									OrderShipToKey: {
										Key: '0'
									},
									Quantity: 4,
									UnitPrice: 1.1,
									PriceType: 0,
									ShippingHandling: 7.77,
									LineTaxPercent: 1.234,
									Discounts: 0,
									LineNumber: 1,
									Comments: 'special instructions for 2021 12M Sea Fantasies Midi Day 368pp',
									ProductDetails: [
										{
											ClusterNumber: 'DC6616-3',
											PartNumber: '99999 - stantec'
										}
									]
								},
								{
									SeqID: 3,
									Offer: {
										Header: {
											ID: 'FB5632-4-na'
										}
									},
									OrderShipToKey: {
										Key: '0'
									},
									Quantity: 5,
									UnitPrice: 1.1,
									PriceType: 0,
									ShippingHandling: 7.77,
									LineTaxPercent: 1.234,
									Discounts: 0,
									LineNumber: 1,
									Comments: 'Calypso Ultra Lin 240pp',
									ProductDetails: [
										{
											ClusterNumber: 'FB5632-4-na',
											PartNumber: 'part number'
										}
									]
								}
							]
						}
					}
				}
			}
		}
	};

	const builder = new XMLBuilder({ attributeNamePrefix: '@_', ignoreAttributes: false });
	const reqXmlContent = builder.build(newOrderRequest);
	// console.log(reqXmlContent);

	let responseXML = await submitVCOrderXML(reqXmlContent);
	const parser = new XMLParser();
	console.log(responseXML);

	let addOrderResponse = parser.parse(responseXML) as AddOrderXMLResponse;
	let veraCoreOrderId =
		addOrderResponse['soap12:Envelope']['soap12:Body'].AddOrderResponse.AddOrderResult.OrderID;

	if (orderId) {
		// Example business logic: Check if orderId is valid
		message = `Order ${orderId} processed successfully.`;
	} else {
		message = 'Invalid order ID.';
	}

	return new Response(JSON.stringify({ veraCoreOrderId }), {
		headers: { 'Content-Type': 'application/json' }
	});
};

async function submitVCOrderXML(requestXML: string): Promise<string> {
	const response = await fetch('https://fulfillment.hemlockharling.com/pmomsws/order.asmx', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/soap+xml; charset=utf-8',
			Namespace: 'sma-promail',
			Encoding: 'UTF-8',
			SOAPAction: 'http://omscom/AddOrder'
		},
		body: requestXML
	});

	const text = await response.text();
	if (!response.ok) {
	}

	return await response.text();
}
