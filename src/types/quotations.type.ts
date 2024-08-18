export interface IQuotation {
  id: number;
  product: string;
  productDescription: string;
  quotation: null | string;
  supplierName: string;
  location: null | string;
  availability: null | string;
  availableQuantity: null | string;
  unitPrice: null | string;
  createdAt: Date;
  emailReceivedAt: Date;
  isFreightPermitted: boolean | null;
  message: string;
}
