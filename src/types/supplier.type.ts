export interface ISupplier {
  id: number;
  name: string;
  details: string;
  emails: Email[];
  phones: Phone[];
  addresses: Address[];
  phoneNumber: string;
  fax: string;
  website: string;
  tollFreeNumber: string;
  quotations: Quotation[];
}

export interface Quotation {
  id: number;
  quotedBy: string;
  quotedTo: string;
  quotation: string;
  supplierName: string;
  location: string;
  termsAndConditions: string;
  createdAt: string;
  emailReceivedAt: string;
  isFreightPermitted: string;
  message: string;
  quotedProducts: QuotedProduct[];
  supplier: string;
}

export interface QuotedProduct {
  id: number;
  product: string;
  productDescription: string;
  availability: string;
  availableQuantity: string;
  unitPrice: string;
  isFreightPermitted: string;
  details: Detail[];
}

export interface Detail {
  id: number;
  productDetails: string;
  unitPrice: string;
  quotedDate: string;
  supplier: string;
}

export interface Address {
  id: number;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  zipCode: string;
  zipCodeExt: string;
  county: string;
  state: City;
  city: City;
  country: Country;
}

export interface City {
  id: number;
  name: string;
  code: string;
  country: Country;
}

export interface Country {
  id: number;
  name: string;
  dialingCode: string;
  code: string;
  currencyCode: string;
}

export interface Email {
  id: number;
  email: string;
  emailType: string;
}

export interface Phone {
  id: number;
  number: string;
  phoneType: string;
}
