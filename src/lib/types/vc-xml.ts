export const EmptyXMLNode = {
	'@_version': '1.0',
	'@_encoding': 'utf-8'
};

export type Soap12RequestEnvelopeHeader = {
	'@_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance';
	'@_xmlns:xsd': 'http://www.w3.org/2001/XMLSchema';
	'@_xmlns:soap12': 'http://www.w3.org/2003/05/soap-envelope';
	'soap12:Header': Soap12RequestHeader;
};

export type Soap12RequestHeader = {
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

export type SoapResponseEnvelopeHeader = {
	DebugHeader?: DebugHeader;
};
