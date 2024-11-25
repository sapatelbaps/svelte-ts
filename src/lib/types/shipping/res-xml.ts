import type { EmptyXMLNode } from '../vc-xml';
import type { DebugHeader } from './req-xml';

export type GetShippingActivityXMLResponse = {
	'?xml': typeof EmptyXMLNode;
	'soap:Envelope': SoapEnvelope;
};

export type SoapEnvelope = {
	'soap:Header': SoapHeader;
	'soap:Body': SoapBody;
};

export type SoapBody = {
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

export type SoapHeader = {
	DebugHeader?: DebugHeader;
};
