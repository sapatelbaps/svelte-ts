import type { EmptyXMLNode, SoapResponseEnvelopeHeader } from '../vc-xml';

export type GetShippingActivityXMLResponse = {
	'?xml': typeof EmptyXMLNode;
	'soap:Envelope': SoapResponseEnvelope;
};

export type SoapResponseEnvelope = {
	'soap:Header': SoapResponseEnvelopeHeader;
	'soap:Body': SoapShippingActivityResponseBody;
};

export type SoapShippingActivityResponseBody = {
	GetShippingActivityResponse: GetShippingActivityResponse;
};

export type GetShippingActivityResponse = {
	GetShippingActivityResult: GetShippingActivityResult;
};

export type GetShippingActivityResult = {
	ShippingActivity: ShippingActivity[];
};

export type ShippingActivity = {
	ShipDate: string;
	OrderId: number;
	PickPackId: number;
	Type: string;
	LinesShipped: number;
	PiecesShipped: number;
	NumberofPackages: number;
	TotalWeight: number;
	PublishedFreight: number;
	ActualFreight: number;
	MarkedUpFreight: number;
	ShippingOrderType: string;
};
