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
	Payment?: Payment;
	OrderVariables?: OrderVariables;
	OrderedBy: BillTo;
	ShipTo: ShipTo;
	BillTo: BillTo;
	Offers: Offers;
	OrderRecurrenceSchedule?: OrderRecurrenceSchedule;
	OrderBudget?: OrderBudget;
};

// Verify the schema and .net code usage in uStoreVeraCoreOrdersender
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
	SeqID: number;
	CustomerID: string;
};

export type Classification = {
	CampaignID: string;
	ResponseMedia: DescriptionNode;
	Source?: DescriptionNode;
	Issue?: Issue;
	CustomerProject: CustomerProject;
	CustomerCode: string;
	Store: string;
	Department?: string;
	DistributionCenter?: string;
	Vendor: string;
};

export type CustomerProject = {
	ID: string;
};

export type Issue = {
	Issue: string;
};

export type DescriptionNode = {
	Description: string;
};

export type Header = {
	ID: string;
	EntryDate: string;
	OrderEntryView: OrderEntryView;
	ReferenceNumber: string;
	PONumber: string;
	Comments: string;
	IpAddress?: string;
	ApprovalComment: string;
	InsertDate?: string;
	UTCEntryDateTime?: string;
};

export type OrderEntryView = {
	SeqID: number;
	Description: string;
};

export type Money = {
	PriceClass?: OrderEntryView;
	ShippingHandlingCharge?: number;
	RushHandlingCharge?: number;
	NoChargeType?: DescriptionNode;
	DiscountAmount?: number;
	DiscountPercent?: number;
	DiscountCode?: DiscountCode;
	Coupon?: Coupon;
	SpecialHandlingCharge?: number;
	CreditAmount?: number;
	GiftCertificate?: GiftCertificate;
	GiftCertificateAmount?: number;
	TaxPercent?: number;
	NoChargeAmount?: number;
	TaxAmount?: number;
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
	Amount: number;
};

export type Offers = {
	OfferOrdered: OfferOrdered[];
};

export type OfferOrdered = {
	// Might require a child node
	Offer?: string;
	Quantity: number;
	CanceledQuantity?: number;
	// Might require a child node
	OrderShipTo?: string;
	// Might require a child node
	OrderShipToKey?: string;
	// Restrict the value for unsignedByte as per XML schema
	PriceType: number;
	UnitPrice: number;
	ShipType: number;
	ShippingHandling: number;
	Discounts?: number;
	DiscountPercent?: string;
	DocumentID?: string;
	SeqID: number;
	CloneLine?: number;
	Unapproved?: boolean;
	ShipToKey?: string;
	FgnOrder?: string;
	Comments?: string;
	RCOrderKey?: string;
	Recurring?: boolean;
	LineNumber: number;
	ProofLink?: string;
	// Might require a child node
	Variables?: string;
	// Might require a child node
	ProductDetails?: string;
	LineTaxPercent?: number;
	ShippingHandlingTaxPercent?: string;
	LineTaxAmount?: number;
};

export type OrderBudget = {
	Person: Person;
};

// All properties might be a node having child nodes
export type Person = {
	Name: string;
	CompanyInfo?: string;
	Address?: string;
	ContactInfo?: string;
	BillingInfo?: string;
	Variables?: string;
};

export type OrderRecurrenceSchedule = {
	RecurrenceSchedules: RecurrenceSchedules;
	RecurrenceOfferFlag: string;
	RecurrenceShippingOption: DescriptionNode;
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
	SeqID: number;
	// Might require a child node
	VariableField?: string;
	Value: string;
	ValueDescription: string;
};

export type Payment = {
	PaymentType: PaymentType;
	PaymentAmount: number;
	CCNumber: string;
	CCExpirationDate: string;
	CSC: string;
	ARReference: string;
	Token: string;
	TransactionID: string;
	AuthorizationCode: string;
	AuthorizationAmount: number;
	AuthorizationDate: string;
};

export type PaymentType = {
	Description: string;
	Sequence: number;
};

export type ShipTo = {
	OrderShipTo: OrderShipTo[];
};

export type OrderShipTo = {
	SeqID: number;
	Flag: string;
	Key: string;
	NeededBy?: string;
	ReleaseDate: string;
	Rush: boolean;
	RushHandling?: number;
	Comments?: string;
	FreightCarrier?: FreightCarrier;
	FreightService?: DescriptionNode;
	ThirdPartyType?: number;
	ThirdPartyAccountNumber?: string;
	FreightCode?: string;
	FreightCodeDescription?: string;
	// Might require a child node
	SpecialHandling?: string;
	SpecialHandlingCharge?: number;
	ShippingHandlingCharge?: number;
	FullName?: string;
	FullNameWithSuffix?: string;
	CityStateZip: string;
	CityStateZipCountry: string;
	CompoundAddress?: string;
	// Might require a child node
	PickPacks?: string;
	ShippingHandlingTaxAmount?: number;
	ShippingHandlingTaxPercent?: number;
};

export type Shipping = {
	FreightCarrier?: FreightCarrier;
	FreightService?: DescriptionNode;
	FreightAccount?: FreightAccount;
	ShippingOption?: DescriptionNode;
	FreightCode: string;
	FreightCodeDescription?: string;
	ShipComments?: string;
	NeededBy?: string;
	Rush?: boolean;
	ReleaseDate?: string;
	ThirdPartyType?: number;
	ThirdAccountNumber?: string;
	NCShip?: boolean;
	NCPack?: boolean;
	NCOffers?: boolean;
	NCHandling?: boolean;
	NCOffShipHandling?: boolean;
	NCSpecialHandling?: boolean;
	NCRush?: boolean;
};

export type FreightAccount = {
	SeqID: number;
	Description?: string;
	FreightCarrier?: FreightCarrier;
	Person?: Person;
	ThirdAcctNo?: string;
	NonResident?: boolean;
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
