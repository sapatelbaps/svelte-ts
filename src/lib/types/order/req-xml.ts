import type { EmptyXMLNode, Soap12RequestEnvelopeHeader } from '../vc-xml';

export type AddOrderXMLRequest = {
	'?xml': typeof EmptyXMLNode;
	'soap12:Envelope': Soap12RequestEnvelope;
};

export type Soap12AddOrderRequestBody = {
	'soap12:Body': Soap12Body;
};

export type Soap12RequestEnvelope = Soap12RequestEnvelopeHeader & Soap12AddOrderRequestBody;

export type Soap12Body = {
	AddOrder: AddOrder;
};

export type AddOrder = {
	'@_xmlns': 'http://sma-promail/';
	order: Order;
};

export type Order = {
	Header: Header;
	Classification: Classification;
	Shipping: Shipping;
	Money: Money;
	Payment: Payment;
	OrderVariables: OrderVariables;
	OrderedBy: BillTo;
	ShipTo: ShipTo;
	BillTo: BillTo;
	Offers: Offers;
	OrderRecurrenceSchedule: OrderRecurrenceSchedule;
	OrderBudget: OrderBudget;
};

export type BillTo = {
	Flag?: string;
	FullName: string;
	FullNameWithSuffix: string;
	CityStateZip: string;
	CityStateZipCountry: string;
	CompoundAddress: string;
	ORDOBY?: Ordoby;
};

export type Ordoby = {
	SeqID: string;
	CustomerID: string;
};

export type Classification = {
	CampaignID: string;
	ResponseMedia: ResponseMedia;
	Source: ResponseMedia;
	Issue: Issue;
	CustomerProject: CustomerProject;
	CustomerCode: string;
	Store: string;
	Department: string;
	DistributionCenter: string;
	Vendor: string;
};

export type CustomerProject = {
	ID: string;
};

export type Issue = {
	Issue: string;
};

export type ResponseMedia = {
	Description: string;
};

export type Header = {
	ID: string;
	EntryDate: string;
	OrderEntryView: OrderEntryView;
	ReferenceNumber: string;
	PONumber: string;
	Comments: string;
	IpAddress: string;
	ApprovalComment: string;
	InsertDate: string;
	UTCEntryDateTime: string;
};

export type OrderEntryView = {
	SeqID: string;
	Description: string;
};

export type Money = {
	PriceClass: OrderEntryView;
	ShippingHandlingCharge: string;
	RushHandlingCharge: string;
	NoChargeType: ResponseMedia;
	DiscountAmount: string;
	DiscountPercent: string;
	DiscountCode: DiscountCode;
	Coupon: Coupon;
	SpecialHandlingCharge: string;
	CreditAmount: string;
	GiftCertificate: GiftCertificate;
	GiftCertificateAmount: string;
	TaxPercent: string;
	NoChargeAmount: string;
	TaxAmount: string;
};

export type Coupon = {
	Code: string;
};

export type DiscountCode = {
	ID: string;
	Description: string;
};

export type GiftCertificate = {
	UID: string;
	Amount: string;
};

export type Offers = {
	OfferOrdered: OfferOrdered[];
};

export type OfferOrdered = {
	Offer: string;
	Quantity: string;
	CanceledQuantity: string;
	OrderShipTo: string;
	OrderShipToKey: string;
	PriceType: string;
	UnitPrice: string;
	ShipType: string;
	ShippingHandling: string;
	Discounts: string;
	DiscountPercent: string;
	DocumentID: string;
	SeqID: string;
	CloneLine: string;
	Unapproved: string;
	ShipToKey: string;
	FgnOrder: string;
	Comments: string;
	RCOrderKey: string;
	Recurring: string;
	LineNumber: string;
	ProofLink: string;
	Variables: string;
	ProductDetails: string;
	LineTaxPercent: string;
	ShippingHandlingTaxPercent: string;
	LineTaxAmount: string;
};

export type OrderBudget = {
	Person: Person;
};

export type Person = {
	Name: string;
	CompanyInfo: string;
	Address: string;
	ContactInfo: string;
	BillingInfo: string;
	Variables: string;
};

export type OrderRecurrenceSchedule = {
	RecurrenceSchedules: RecurrenceSchedules;
	RecurrenceOfferFlag: string;
	RecurrenceShippingOption: ResponseMedia;
	RecurrenceSpecialHandlingCharge: string;
	NumberRecurrence: string;
};

export type RecurrenceSchedules = {
	SeqID: string;
	ID: string;
	Description: string;
	Definition: string;
	DefinitionDetail: string;
	Schedule: string;
	ScheduleCount: string;
	Cycle: string;
	StartCycleDate: string;
	DaysToJoin: string;
	MonthlyRecurrenceType: string;
	MinimumRecurrences: string;
	MaximumRecurrences: string;
	RecurrenceIncrement: string;
	AllowInfiniteRecurrence: string;
	InfiniteTag: string;
	DurationTag: string;
	ExpirationDate: string;
	NextCycleDate: string;
	HasValidCycleDate: string;
	AnyOffer: string;
	RecurrenceScheduleShippingOptions: string;
};

export type OrderVariables = {
	OrderVariable: OrderVariable[];
};

export type OrderVariable = {
	SeqID: string;
	VariableField: string;
	Value: string;
	ValueDescription: string;
};

export type Payment = {
	PaymentType: PaymentType;
	PaymentAmount: string;
	CCNumber: string;
	CCExpirationDate: string;
	CSC: string;
	ARReference: string;
	Token: string;
	TransactionID: string;
	AuthorizationCode: string;
	AuthorizationAmount: string;
	AuthorizationDate: string;
};

export type PaymentType = {
	Description: string;
	Sequence: string;
};

export type ShipTo = {
	OrderShipTo: OrderShipTo[];
};

export type OrderShipTo = {
	SeqID: string;
	Flag: string;
	Key: string;
	NeededBy: string;
	ReleaseDate: string;
	Rush: string;
	RushHandling: string;
	Comments: string;
	FreightCarrier: string;
	FreightService: string;
	ThirdPartyType: string;
	ThirdPartyAccountNumber: string;
	FreightCode: string;
	FreightCodeDescription: string;
	SpecialHandling: string;
	SpecialHandlingCharge: string;
	ShippingHandlingCharge: string;
	FullName: string;
	FullNameWithSuffix: string;
	CityStateZip: string;
	CityStateZipCountry: string;
	CompoundAddress: string;
	PickPacks: string;
	ShippingHandlingTaxAmount: string;
	ShippingHandlingTaxPercent: string;
};

export type Shipping = {
	FreightCarrier: FreightCarrier;
	FreightService: ResponseMedia;
	FreightAccount: FreightAccount;
	ShippingOption: ResponseMedia;
	FreightCode: string;
	FreightCodeDescription: string;
	ShipComments: string;
	NeededBy: string;
	Rush: string;
	ReleaseDate: string;
	ThirdPartyType: string;
	ThirdAccountNumber: string;
	NCShip: string;
	NCPack: string;
	NCOffers: string;
	NCHandling: string;
	NCOffShipHandling: string;
	NCSpecialHandling: string;
	NCRush: string;
};

export type FreightAccount = {
	SeqID: string;
	Description: string;
	FreightCarrier: string;
	Person: string;
	ThirdAcctNo: string;
	NonResident: string;
};

export type FreightCarrier = {
	Name: string;
};

export type Soap12Header = {
	AuthenticationHeader: AuthenticationHeader;
	DebugHeader: DebugHeader;
};

export type AuthenticationHeader = {
	Username: string;
	Password: string;
};

export type DebugHeader = {
	Debug: string;
	Request: string;
};
