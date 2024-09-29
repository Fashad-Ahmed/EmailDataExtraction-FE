import { useNavigate, useParams } from 'react-router-dom';
import useGetSupplierDetail from './containers/useGetSupplierDetail';
import DashboardPage from '@/components/layouts/dashboard-page';
import IconButton from '@/components/molecules/icon-button';
import { EditIcon } from '@/assets/svgs';
import DetailCard from '@/components/molecules/details-card';
import SPTooltip from '@/components/atoms/sp-tooltip';
import { formatDate, openLinkInNewTab } from '@/utils/helpers/general.helper';
import { cn } from '@/utils/helpers/tailwind.helper';
import SPHeading from '@/components/atoms/sp-heading';
import SPContainer from '@/components/atoms/sp-container';
import { Collapse } from 'antd';
import SPAccordion from '@/components/atoms/sp-accordian';
import { ISupplier, Quotation } from '@/types/supplier.type';
import { useRef, useState } from 'react';
import SPLabel from '@/components/atoms/sp-label';
import QuotationsProductDetailsModal from './components/Modals/QuotationsProductDetailsModal';

const { Panel } = Collapse;

export default function ViewSupplier() {
  const params = useParams();
  const navigate = useNavigate();

  const { supplierId = null } = params;

  const { supplierDetails, supplierDetailsLoading } =
    useGetSupplierDetail(supplierId);

  return (
    <DashboardPage
      heading="Supplier Information"
      className="space-y-5"
      allowBack
      actions={[
        <SPTooltip>
          <IconButton
            disabled
            onClick={() =>
              navigate(`/supplier-management/create/${supplierId}`)
            }
            icon={<EditIcon className="size-4 text-primary" />}
          >
            Edit
          </IconButton>
        </SPTooltip>,
      ]}
    >
      <DetailCard
        horizontal
        loading={supplierDetailsLoading}
        details={{
          id: supplierDetails?.id?.toString() ?? 'N/A',
          name: supplierDetails?.name ?? 'N/A',
          details: supplierDetails?.details ?? 'N/A',
          phoneNumber: supplierDetails?.phoneNumber ?? 'N/A',
          tollFreeNumber: supplierDetails?.tollFreeNumber ?? 'N/A',
          fax: supplierDetails?.fax ?? 'N/A',
          website: () => {
            const websiteUrl = supplierDetails?.website;
            if (!websiteUrl) return <div>N/A</div>;
            return (
              <div
                className={cn('cursor-pointer hover:text-primary')}
                onClick={() => {
                  openLinkInNewTab(websiteUrl);
                }}
              >
                {websiteUrl}
              </div>
            );
          },
          emails: supplierDetails?.emails
            ? supplierDetails?.emails
                .map(
                  (i: { email: string; emailType: string }) =>
                    `${i?.email}  - ${i?.emailType}`
                )
                .join(',')
            : 'N/A',

          phones: supplierDetails?.phones
            ? supplierDetails?.phones
                .map(
                  (i: { number: string; phoneType: string }) =>
                    `${i?.number}  - ${i?.phoneType}`
                )
                .join(',  ')
            : 'N/A',

          addresses: supplierDetails?.addresses
            ? supplierDetails?.addresses
                .map(
                  (i) =>
                    `${i?.addressLine1},  ${i?.zipCode} , ${i?.country?.name ?? ''}  ,${i?.state?.name ?? ''}  , ${i?.city?.name ?? ''}`
                )
                .join(',  ')
            : 'N/A',
        }}
      />

      <SPHeading>Old Quotations</SPHeading>

      <SPContainer className="flex flex-col gap-2.5">
        <QuotationAccordion quotations={supplierDetails?.quotations ?? []} />
      </SPContainer>
    </DashboardPage>
  );
}

const QuotationAccordion = ({
  quotations,
}: {
  quotations?: ISupplier['quotations'];
}) => {
  const currentQuotationIdRef = useRef<string | null>(null);
  const currentQuotationRef = useRef<Quotation['quotedProducts'] | null>(null);
  const [previewModal, setPreviewModal] = useState<boolean>(false);

  function handlePreviewModal() {
    setPreviewModal((prev) => !prev);
  }
  return (
    <>
      <SPAccordion>
        {quotations &&
          quotations?.map((quotation, index) => (
            <Panel
              header={`Quotation # ${quotation?.quotation ?? index + 1}:`}
              key={quotation?.id}
            >
              <DetailCard
                horizontal
                details={{
                  id: quotation?.id?.toString() ?? 'N/A',
                  quotedBy: quotation?.quotedBy ?? 'N/A',
                  quotedTo: quotation?.quotedTo ?? 'N/A',
                  supplierName: quotation?.supplierName ?? 'N/A',
                  emailReceivedAt: quotation?.emailReceivedAt
                    ? formatDate(quotation?.emailReceivedAt)
                    : 'N/A',
                  location: quotation?.location?.toString() ?? 'N/A',

                  // products:
                  //   quotation?.quotedProducts?.length > 0
                  //     ? quotation?.quotedProducts
                  //         .map((i) => `${i?.product} `)
                  //         .join(', ')
                  //     : 'N/A',
                  products: () => (
                    <SPLabel
                      onClick={() => {
                        currentQuotationIdRef.current =
                          quotation?.quotation ?? '';

                        currentQuotationRef.current =
                          quotation?.quotedProducts?.length > 0
                            ? quotation?.quotedProducts
                            : [];

                        handlePreviewModal();
                      }}
                      className="cursor-pointer text-tealv1 underline hover:text-primary"
                    >
                      View Quoted Products
                    </SPLabel>
                  ),
                  isFreightPermitted: String(
                    quotation?.isFreightPermitted ?? 'N/A'
                  ),
                }}
              />
            </Panel>
          ))}
      </SPAccordion>

      <QuotationsProductDetailsModal
        open={previewModal}
        onCancel={handlePreviewModal}
        products={currentQuotationRef.current}
        quotationId={currentQuotationIdRef.current}
      />
    </>
  );
};
