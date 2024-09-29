import SPHeading from '@/components/atoms/sp-heading';
import SPModal from '@/components/atoms/sp-modal';
import DetailCard from '@/components/molecules/details-card';
import { Quotation } from '@/types/supplier.type';
import { formatDate } from '@/utils/helpers/general.helper';
import { Empty } from 'antd';

interface IQuotationsProductDetailsModalProps {
  open: boolean;
  onCancel: () => void;
  products: Quotation['quotedProducts'] | null;
  quotationId: string | null;
}

export default function QuotationsProductDetailsModal({
  open,
  onCancel,
  products,
  quotationId,
}: IQuotationsProductDetailsModalProps) {
  return (
    <SPModal
      centered
      title={`${quotationId} Product Details`}
      open={open}
      onCancel={onCancel}
      footer={null}
      width={'60%'}
      className="rounded-lg bg-white shadow-md"
    >
      <div className="max-h-[calc(90vh-200px)] overflow-y-auto p-6">
        {products?.length !== 0 ? (
          <>
            {products?.map((product) => (
              <>
                <SPHeading>{`${product?.product} - ${product?.id}`}</SPHeading>

                {product?.details?.length !== 0 &&
                  product?.details?.map((i) => (
                    <DetailCard
                      horizontal
                      details={{
                        id: i?.id?.toString() ?? 'N/A',
                        quotedDate: i?.quotedDate
                          ? formatDate(i?.quotedDate)
                          : 'N/A',
                        details: i?.productDetails ?? 'N/A',
                        supplier: i?.supplier ?? 'N/A',
                        unitPrice: i?.unitPrice ?? 'N/A',
                      }}
                    />
                  ))}
              </>
            ))}
          </>
        ) : (
          <Empty
            description="No Products Available"
            className="text-xs [&_.ant-empty-description]:!text-secondary"
            imageStyle={{ width: 50, height: 55, margin: '0 auto' }}
          />
        )}
      </div>
    </SPModal>
  );
}
