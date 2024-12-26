import type { DebugHeader, EmptyXMLNode } from '../vc-xml';

export type AddOrderXMLResponse = {
	'?xml': typeof EmptyXMLNode;
	'soap12:Envelope': Soap12ResponseEnvelope;
};

export type Soap12ResponseEnvelope = {
	'soap12:Header': SoapResponseEnvelopeHeader;
	'soap12:Body': SoapAddOrderResponseBody;
};

export type SoapAddOrderResponseBody = {
	AddOrderResponse: AddOrderResponse;
};

export type AddOrderResponse = {
	AddOrderResult: AddOrderResult;
};

export type AddOrderResult = {
	OrderSeqID: number;
	OrderID: string;
};

export type SoapResponseEnvelopeHeader = {
	DebugHeader: DebugHeader;
};
