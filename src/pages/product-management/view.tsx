import { useLocation } from 'react-router-dom';
import { Collapse } from 'antd';

import { formatDate } from '@/utils/helpers/general.helper';
import DashboardPage from '@/components/layouts/dashboard-page';
import DetailCard from '@/components/molecules/details-card';
import SPHeading from '@/components/atoms/sp-heading';
import SPContainer from '@/components/atoms/sp-container';
import SPAccordion from '@/components/atoms/sp-accordian';
import SPLabel from '@/components/atoms/sp-label';

const { Panel } = Collapse;

export default function ViewQuotation() {
  const { state } = useLocation();

  const { data } = state;

  return (
    <DashboardPage heading="Quotation Details" className="space-y-5" allowBack>
      <DetailCard
        horizontal
        details={{
          quotation: data?.quotation,
          createdAt: formatDate(data?.createdAt) ?? 'N/A',
          quotedBy: data?.quotedBy ?? 'N/A',
          emailReceivedAt: formatDate(data?.emailReceivedAt) ?? 'N/A',
          quotedTo: data?.quotedTo ?? 'N/A',
          location: data?.location ?? 'N/A',
          supplierName: data?.supplier?.name ?? 'N/A',
          supplierId: data?.supplier?.id ?? 'N/A',
          supplierPhoneNumber: data?.supplier?.phoneNumber ?? 'N/A',
          supplierTollFreeNumber: data?.supplier?.tollFreeNumber ?? 'N/A',
          availableQuantity: data?.availableQuantity ?? 'N/A',
          isFreightPermitted: String(data?.isFreightPermitted ?? 'N/A'),
        }}
      />

      <SPHeading>Quoted Products</SPHeading>

      <SPContainer className="flex flex-col gap-2.5">
        <QuotationAccordion products={data?.quotedProducts ?? []} />
      </SPContainer>
    </DashboardPage>
  );
}

const QuotationAccordion = ({
  products,
}: {
  products?: {
    id: number;
    product: string;
    productDescription: string;
    availability: string;
    availableQuantity: string;
    unitPrice: string;
    isFreightPermitted: boolean;
    details: {
      id: string;
      productDetails: string;
      unitPrice: string;
      quotedDate: string;
      supplier: string;
    }[];
  }[];
}) => {
  return (
    <>
      <SPAccordion>
        {products &&
          products?.map((product) => (
            <Panel
              header={`${product?.product} -  #${product?.id}`}
              key={product?.id}
            >
              <SPLabel>Availibility: {product?.availability ?? 'N/A'}</SPLabel>
              {product?.details?.length !== 0 &&
                product?.details?.map(
                  (detail: {
                    id: string;
                    quotedDate: string;
                    productDetails: string;
                    unitPrice: string;
                    supplier: string;
                  }) => (
                    <DetailCard
                      horizontal
                      details={{
                        id: detail?.id?.toString() ?? 'N/A',
                        quotedDate: detail?.quotedDate
                          ? formatDate(detail?.quotedDate)
                          : 'N/A',
                        details: detail?.productDetails ?? 'N/A',
                        unitPrice: detail?.unitPrice ?? 'N/A',
                        supplier: detail?.supplier ?? 'N/A',
                      }}
                    />
                  )
                )}
            </Panel>
          ))}
      </SPAccordion>
    </>
  );
};
