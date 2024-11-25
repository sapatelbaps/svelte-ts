import type { EmptyXMLNode } from '../vc-xml';

export type GetShippingActivityXMLRequest = {
	'?xml': typeof EmptyXMLNode;
	'soap12:Envelope': Soap12Envelope;
};

export type Soap12Envelope = {
	'@_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance';
	'@_xmlns:xsd': 'http://www.w3.org/2001/XMLSchema';
	'@_xmlns:soap12': 'http://www.w3.org/2003/05/soap-envelope';
	'soap12:Header': Soap12Header;
	'soap12:Body': Soap12Body;
};

export type Soap12Body = {
	GetShippingActivity: GetShippingActivity;
};

export type GetShippingActivity = {
	'@_xmlns': 'http://sma-promail/';
	StartDate: string;
	EndDate: string;
};

export type Soap12Header = {
	AuthenticationHeader: AuthenticationHeader;
	DebugHeader?: DebugHeader;
};

export type AuthenticationHeader = {
	'@_xmlns': 'http://sma-promail/';
	Username: string;
	Password: string;
};

export type DebugHeader = {
	'@_xmlns': 'http://sma-promail/';
	Debug: string;
	Request: string;
};
