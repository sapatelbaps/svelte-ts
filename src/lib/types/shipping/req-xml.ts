import type { EmptyXMLNode, Soap12RequestEnvelopeHeader } from '../vc-xml';

export type GetShippingActivityXMLRequest = {
	'?xml': typeof EmptyXMLNode;
	'soap12:Envelope': Soap12RequestEnvelope;
};

export type Soap12ShippingActivityRequestBody = {
	'soap12:Body': Soap12Body;
};

export type Soap12RequestEnvelope = Soap12RequestEnvelopeHeader & Soap12ShippingActivityRequestBody;

export type Soap12Body = {
	GetShippingActivity: GetShippingActivity;
};

export type GetShippingActivity = {
	'@_xmlns': 'http://sma-promail/';
	StartDate: string;
	EndDate: string;
};
