import _ from 'lodash';

// import { RightArrowIcon } from '@/assets/svgs';
import SPTable from '@/components/atoms/sp-table';
import { IQuotation } from '@/types/quotations.type';
import { QUERY_STRING } from '@/utils/constants/query.constant';
import { formatDate } from '@/utils/helpers/general.helper';
import DashboardPage from '@/components/layouts/dashboard-page';
import ControlBar from '@/components/molecules/control-bar';
import useQuotation from './container/useQuotation';
import useQueryString from '@/hooks/useQueryString';
import { Form } from 'antd';
import SelectSearch from '@/components/molecules/select-search';
import SPButton from '@/components/atoms/sp-button';
import FormLabelInput from '@/components/molecules/form-label-input';
// import { Link } from 'react-router-dom';

/**
 * ProductManagement component displays a table of products.
 * It fetches product data from the API using the useGetApi hook.
 * The table columns are defined and the data is rendered accordingly.
 * The component also includes a Card component as a wrapper.
 *
 * @returns {JSX.Element} - The ProductManagement component.
 */

export default function ProductManagement() {
  const { setQuery, removeQuery } = useQueryString();
  const {
    debouncedSearch,
    emailContentResponse,
    isLoading,
    form,
    onSubmit,
    onClear,
    supplierNames,
    locations,
  } = useQuotation();

  return (
    <DashboardPage heading={'Quotations'} className="space-y-3">
      <ControlBar onSearch={(e) => debouncedSearch(e.target.value)} />

      <Form
        scrollToFirstError={{ behavior: 'smooth' }}
        form={form}
        onFinish={onSubmit}
      >
        <div className="flex flex-row items-center gap-x-2">
          <SelectSearch
            mode="tags"
            filterOption={false}
            maxTagCount={2}
            maxTagTextLength={10}
            name="supplierNames"
            key={_.uniqueId('supplier_names')}
            defaultValue={supplierNames}
            url="/email-content/all-available-suppliers"
            queryKey={['email-content', 'all-available-suppliers']}
            label=""
            placeholder="Supplier Names"
            allowClear
            onClear={() => {
              removeQuery([QUERY_STRING.OTHER_PARAMS.FILTERS.SUPPLIER_NAMES]);
            }}
          />

          <SelectSearch
            mode="tags"
            filterOption={false}
            maxTagCount={2}
            maxTagTextLength={10}
            name="locations"
            key={_.uniqueId('supplier_names')}
            defaultValue={locations}
            url="/email-content/all-available-locations"
            queryKey={['email-content', 'all-available-locations']}
            label=""
            placeholder="Locations"
            allowClear
            onClear={() => {
              removeQuery([QUERY_STRING.OTHER_PARAMS.FILTERS.LOCATIONS]);
            }}
          />

          <FormLabelInput.DatePicker
            // defaultValue={dayjs(startDate)}
            name="startDate"
            label=""
            placeholder={'Start Date'}
            allowClear={false}
          />

          <FormLabelInput.DatePicker
            // defaultValue={dayjs(endDate)}
            name="endDate"
            label=""
            placeholder={'Start Date'}
            allowClear={false}
          />
        </div>
        <div className="my-2 flex flex-row items-center justify-end gap-5 px-3">
          <SPButton type="primary" className="w-28" htmlType="submit">
            <p>Apply</p>
          </SPButton>
          <SPButton
            type="text"
            className="w-14"
            onClick={onClear}
            htmlType="button"
          >
            <p className="font-bold text-primary">Clear</p>
          </SPButton>
        </div>
      </Form>

      <SPTable
        dataSource={emailContentResponse?.data ?? []}
        columns={columns}
        rowKey={(record) => record?.id}
        loading={isLoading}
        pagination={{
          total: emailContentResponse?.totalRecords,
        }}
        scroll={{ x: 300 }}
        onChange={(page) =>
          setQuery({
            [QUERY_STRING.PAGINATION.PAGE]: page.current?.toString() ?? '1',
          })
        }
        footer={() => (
          <p className="text-gray-400">
            Total {emailContentResponse?.totalRecords ?? 0} Items
          </p>
        )}
      />
    </DashboardPage>
  );
}

const columns = [
  {
    title: 'ID',
    render: (data: IQuotation) => {
      return <p>{data?.id ?? 'N/A'}</p>;
    },
  },
  {
    title: 'Product',
    render: (data: IQuotation) => {
      return <p>{data?.product ?? 'N/A'}</p>;
    },
  },
  {
    title: 'Product Description',
    render: (data: IQuotation) => {
      return <p>{data?.productDescription ?? 'N/A'}</p>;
    },
  },

  {
    title: 'Availability',
    render: (data: IQuotation) => {
      return <p>{data?.availability ?? 'N/A'}</p>;
    },
  },
  {
    title: 'Available Quantity',
    render: (data: IQuotation) => {
      return <p>{data?.availableQuantity ?? 'N/A'}</p>;
    },
  },

  {
    title: 'Unit Price',
    render: (data: IQuotation) => {
      return <p>{data?.unitPrice ?? 'N/A'}</p>;
    },
  },
  {
    title: 'Supplier Name',
    render: (data: IQuotation) => {
      return <p>{data?.supplierName ?? 'N/A'}</p>;
    },
  },
  {
    title: 'Email Received',
    render: (data: IQuotation) => {
      return (
        <p>
          {data?.emailReceivedAt ? formatDate(data?.emailReceivedAt) : 'N/A'}
        </p>
      );
    },
  },
  {
    title: 'Location',
    render: (data: IQuotation) => {
      return <p>{data?.location ?? 'N/A'}</p>;
    },
  },
];
