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
import { ISupplier } from '@/types/supplier.type';

export default function ViewSupplier() {
  const params = useParams();
  const navigate = useNavigate();

  const { supplierId = null } = params;

  const { supplierDetails, supplierDetailsLoading } =
    useGetSupplierDetail(supplierId);

  console.log(supplierDetails?.quotations);
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
                className={cn(
                  'cursor-pointer hover:font-bold hover:text-primary'
                )}
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

const { Panel } = Collapse;

const QuotationAccordion = ({
  quotations,
}: {
  quotations?: ISupplier['quotations'];
}) => {
  console.log({ quotations });
  return (
    <SPAccordion>
      {quotations &&
        quotations?.map((quotation, index) => (
          <Panel header={`Quotation #${index + 1}:`} key={quotation?.id}>
            <DetailCard
              horizontal
              details={{
                id: quotation?.id?.toString() ?? 'N/A',
                quotation: quotation?.quotation ?? 'N/A',
                quotedBy: quotation?.quotedBy ?? 'N/A',
                quotedTo: quotation?.quotedTo ?? 'N/A',
                supplierName: quotation?.supplierName ?? 'N/A',
                emailReceivedAt: quotation?.emailReceivedAt
                  ? formatDate(quotation?.emailReceivedAt)
                  : 'N/A',
                location: quotation?.location?.toString() ?? 'N/A',
                isFreightPermitted: String(
                  quotation?.isFreightPermitted ?? 'N/A'
                ),
                products:
                  quotation?.quotedProducts?.length > 0
                    ? quotation?.quotedProducts
                        .map((i) => `${i?.product} `)
                        .join(', ')
                    : 'N/A',
              }}
            />
          </Panel>
        ))}
    </SPAccordion>
  );
};
