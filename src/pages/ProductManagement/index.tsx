import SPTable from '@/components/atoms/sp-table';
import Card from '@/components/organisms/card';
import useGetApi from '@/hooks/useGetApi';
import { PaginatedResponse } from '@/hooks/usePaginatedApi';

const DATA = [
  {
    id: 19,
    product: 'AFR4BCOS6',
    productDescription:
      'SURFACE RACEWAY, ABOVE FLOOR RACEWAY BASE AND COVER 6FT, OFFICE SLATE',
    quotation: null,
    supplierName: 'D',
    location: null,
    availability: 'june-10th ARO',
    availableQuantity: '4.00',
    unitPrice: '$66.45/EA',
    createdAt: '2024-05-27T21:58:58Z',
    isFreightPermitted: null,
    message:
      '2 AFR4BCOS6 Panduit SURFACE RACEWAY, ABOVE FLOOR RACEWAY BASE AND COVER 6FT, OFFICE SLATE LEAD TIME: june 10th ARO 4.00 EA $66.45/EA $265.80 PART NUMBER DESCRIPTION DATA SHEET QUANTITY UOM UNIT PRICE/PER EXTENDED PRICE',
  },
  {
    id: 42,
    product: 'CFFPL4WH',
    productDescription: ' Mini-Com® Modular Furniture Faceplate, 4 Port, WH ',
    quotation: null,
    supplierName: 'ophycare',
    location: null,
    availability: '4-5-days',
    availableQuantity: '10.00',
    unitPrice: '$3.95/EA',
    createdAt: '2024-05-27T21:59:40Z',
    isFreightPermitted: null,
    message:
      '11 CFFPL4WH Panduit Mini-Com® Modular Furniture Faceplate, 4 Port, WH LEAD TIME: 4-5 days 10.00 EA $3.95/EA $39.50',
  },
  {
    id: 43,
    product: 'CFPWR4CIG',
    productDescription:
      ' Mini-Com®, Faceplate, Rated IP 56, 4 port, International Gray ',
    quotation: null,
    supplierName: 'A',
    location: null,
    availability: '4-5-days',
    availableQuantity: '10.00',
    unitPrice: '$33.60/EA',
    createdAt: '2024-05-27T21:59:40Z',
    isFreightPermitted: null,
    message:
      '12 CFPWR4CIG Panduit Mini-Com®, Faceplate, Rated IP 56, 4 port, International Gray LEAD TIME: 4-5 days 10.00 EA $33.60/EA $336.00 PART NUMBER DESCRIPTION DATA SHEET QUANTITY UOM UNIT PRICE/PER EXTENDED PRICE',
  },
  {
    id: 45,
    product: 'AFR4BCOS6',
    productDescription:
      ' SURFACE RACEWAY, ABOVE FLOOR RACEWAY BASE AND COVER 6FT, OFFICE SLATE ',
    quotation: null,
    supplierName: 'A',
    location: null,
    availability: 'june-10th ARO',
    availableQuantity: '4.00',
    unitPrice: '$66.45/EA',
    createdAt: '2024-05-27T22:00:41Z',
    isFreightPermitted: null,
    message:
      '2 AFR4BCOS6 Panduit SURFACE RACEWAY, ABOVE FLOOR RACEWAY BASE AND COVER 6FT, OFFICE SLATE LEAD TIME: june 10th ARO 4.00 EA $66.45/EA $265.80 PART NUMBER DESCRIPTION DATA SHEET QUANTITY UOM UNIT PRICE/PER EXTENDED PRICE',
  },
  {
    id: 47,
    product: 'AFR4JB2SOS',
    productDescription:
      ' SURFACE RACEWAY, ABOVE FLOOR RACEWAY DOUBLE GANG JUNCTION, OFFICE SLATE ',
    quotation: null,
    supplierName: 'E',
    location: null,
    availability: '4-5-days',
    availableQuantity: '4.00',
    unitPrice: '$31.91/EA',
    createdAt: '2024-05-27T22:00:41Z',
    isFreightPermitted: null,
    message:
      '4 AFR4JB2SOS Panduit SURFACE RACEWAY, ABOVE FLOOR RACEWAY DOUBLE GANG JUNCTION, OFFICE SLATE LEAD TIME: 4-5 days 4.00 EA $31.91/EA $127.64',
  },
  {
    id: 48,
    product: 'CFFPL4WH',
    productDescription: ' Mini-Com® Modular Furniture Faceplate, 4 Port, WH ',
    quotation: null,
    supplierName: 'ophycare',
    location: null,
    availability: '4-5-days',
    availableQuantity: '10.00',
    unitPrice: '$3.95/EA',
    createdAt: '2024-05-27T21:59:40Z',
    isFreightPermitted: null,
    message:
      '11 CFFPL4WH Panduit Mini-Com® Modular Furniture Faceplate, 4 Port, WH LEAD TIME: 4-5 days 10.00 EA $3.95/EA $39.50',
  },
  {
    id: 54,
    product: 'CFPWR4CIG',
    productDescription:
      ' Mini-Com®, Faceplate, Rated IP 56, 4 port, International Gray ',
    quotation: null,
    supplierName: 'B',
    location: null,
    availability: '4-5-days',
    availableQuantity: '10.00',
    unitPrice: '$33.60/EA',
    createdAt: '2024-05-27T22:00:41Z',
    isFreightPermitted: null,
    message:
      '12 CFPWR4CIG Panduit Mini-Com®, Faceplate, Rated IP 56, 4 port, International Gray LEAD TIME: 4-5 days 10.00 EA $33.60/EA $336.00 PART NUMBER DESCRIPTION DATA SHEET QUANTITY UOM UNIT PRICE/PER EXTENDED PRICE',
  },
  {
    id: 55,
    product: '350-04TCG-VN5501',
    productDescription:
      '350-4 GRD BC TC-ER THHN/THWN-2 M4 In Stock from Tampa w/#3 Bare Copper Ground 3,015 lbs',
    quotation: '104259',
    supplierName: 'A',
    location: '191 METHODIST ST. CARLYLE, IL 62231 USA',
    availability: null,
    availableQuantity: '1',
    unitPrice: '$21,202.50',
    createdAt: '2024-05-27T22:00:50Z',
    isFreightPermitted: null,
    message:
      '{\r\n  "products": [\r\n    {\r\n      "product_id": "350-04TCG-VN5501",\r\n      "descriptions": "350-4 GRD BC TC-ER THHN/THWN-2 M4 In Stock from Tampa w/#3 Bare Copper Ground 3,015 lbs",\r\n      "quantity": 1,\r\n      "unit_price": "$21,202.50",\r\n      "in_stock": "YES",\r\n      "lead_time": null\r\n    }\r\n  ],\r\n  "quote_number": "104259",\r\n  "isFreightPermitted": null,\r\n  "email": null,\r\n  "location": "191 METHODIST ST. CARLYLE, IL 62231 USA"\r\n}',
  },
  {
    id: 56,
    product: '426400S',
    productDescription: '10 19/W 2KV BC XLPE PV BK 500S',
    quotation: '4038277-00',
    supplierName: 'A',
    location: 'CHINO, CA 91710',
    availability: '8 weeks',
    availableQuantity: '500',
    unitPrice: '300.0',
    createdAt: '2024-05-27T22:01:11Z',
    isFreightPermitted: null,
    message:
      '{\r\n  "products": [\r\n    {\r\n      "product_id": "426400S",\r\n      "descriptions": "10 19/W 2KV BC XLPE PV BK 500S",\r\n      "quantity": 500,\r\n      "unit_price": 300.00,\r\n      "in_stock": "NO",\r\n      "lead_time": "8 weeks"\r\n    },\r\n    {\r\n      "product_id": "426300S",\r\n      "descriptions": "8 19/W 2KV BC XLPE PV BK 500S",\r\n      "quantity": 500,\r\n      "unit_price": 500.00,\r\n      "in_stock": "NO",\r\n      "lead_time": "8 weeks"\r\n    },\r\n    {\r\n      "product_id": "439400S",\r\n      "descriptions": "10 19/W 2KV BC XLPE PV RD 500S",\r\n      "quantity": 500,\r\n      "unit_price": 300.00,\r\n      "in_stock": "NO",\r\n      "lead_time": "8 weeks"\r\n    },\r\n    {\r\n      "product_id": "439420S",\r\n      "descriptions": "8 19/W 2KV BC XLPE PV RD 500S",\r\n      "quantity": 500,\r\n      "unit_price": 500.00,\r\n      "in_stock": "YES",\r\n      "lead_time": "8 weeks"\r\n    }\r\n  ],\r\n  "quote_number": "4038277-00",\r\n  "is_freight_permitted": null,\r\n  "email": "matthewi@theaenterprises.com",\r\n  "location": "CHINO, CA 91710"\r\n}',
  },
  {
    id: 58,
    product: '439400S',
    productDescription: '10 19/W 2KV BC XLPE PV RD 500S',
    quotation: '4038277-00',
    supplierName: 'G',
    location: 'CHINO, CA 91710',
    availability: '8 weeks',
    availableQuantity: '500',
    unitPrice: '300.0',
    createdAt: '2024-05-27T22:01:11Z',
    isFreightPermitted: null,
    message:
      '{\r\n  "products": [\r\n    {\r\n      "product_id": "426400S",\r\n      "descriptions": "10 19/W 2KV BC XLPE PV BK 500S",\r\n      "quantity": 500,\r\n      "unit_price": 300.00,\r\n      "in_stock": "NO",\r\n      "lead_time": "8 weeks"\r\n    },\r\n    {\r\n      "product_id": "426300S",\r\n      "descriptions": "8 19/W 2KV BC XLPE PV BK 500S",\r\n      "quantity": 500,\r\n      "unit_price": 500.00,\r\n      "in_stock": "NO",\r\n      "lead_time": "8 weeks"\r\n    },\r\n    {\r\n      "product_id": "439400S",\r\n      "descriptions": "10 19/W 2KV BC XLPE PV RD 500S",\r\n      "quantity": 500,\r\n      "unit_price": 300.00,\r\n      "in_stock": "NO",\r\n      "lead_time": "8 weeks"\r\n    },\r\n    {\r\n      "product_id": "439420S",\r\n      "descriptions": "8 19/W 2KV BC XLPE PV RD 500S",\r\n      "quantity": 500,\r\n      "unit_price": 500.00,\r\n      "in_stock": "YES",\r\n      "lead_time": "8 weeks"\r\n    }\r\n  ],\r\n  "quote_number": "4038277-00",\r\n  "is_freight_permitted": null,\r\n  "email": "matthewi@theaenterprises.com",\r\n  "location": "CHINO, CA 91710"\r\n}',
  },
  {
    id: 60,
    product: 'FSD91-27-Q',
    productDescription: ' Pan-Term® FSD91-27-Q Covered single wire ferrules ',
    quotation: null,
    supplierName: 'ophycare',
    location: null,
    availability: '4-5-days',
    availableQuantity: '25.00',
    unitPrice: '$132.33/EA',
    createdAt: '2024-05-27T22:01:40Z',
    isFreightPermitted: null,
    message:
      '1 FSD91-27-Q Panduit Pan-Term® FSD91-27-Q Covered single wire ferrules LEAD TIME: 4-5 days 25.00 EA $132.33/EA $3,308.25',
  },
];
export default function ProductManagement() {
  const { data: emailContentResponse, isLoading } = useGetApi<
    PaginatedResponse<any>
  >({
    key: ['/public/email-content'],
    url: `/public/email-content`,
  });

  const columns = [
    {
      title: 'ID',
      render: (data: any) => {
        return <p>{data?.id ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Product',
      render: (data: any) => {
        return <p>{data?.product ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Product Description',
      render: (data: any) => {
        return <p>{data?.productDescription ?? 'N/A'}</p>;
      },
    },

    {
      title: 'Availability',
      render: (data: any) => {
        return <p>{data?.availability ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Available Quantity',
      render: (data: any) => {
        return <p>{data?.availableQuantity ?? 'N/A'}</p>;
      },
    },

    {
      title: 'Unit Price',
      render: (data: any) => {
        return <p>{data?.unitPrice ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Supplier Name',
      render: (data: any) => {
        return <p>{data?.supplierName ?? 'N/A'}</p>;
      },
    },
    {
      title: 'Location',
      render: (data: any) => {
        return <p>{data?.location ?? 'N/A'}</p>;
      },
    },
  ];

  return (
    <Card heading="">
      <SPTable
        dataSource={DATA}
        columns={columns}
        rowKey={(record) => record?.id}
        loading={isLoading}
        pagination={
          {
            // total: count,
          }
        }
        scroll={{ x: 300 }}
        // onChange={(page) =>
        //   setQuery({
        //     [QUERY_STRING.PAGINATION.PAGE]: page.current?.toString() ?? '1',
        //   })
        // }
        footer={() => (
          <p className="text-gray-400">Total {DATA?.length} Items</p>
        )}
      />
    </Card>
  );
}
