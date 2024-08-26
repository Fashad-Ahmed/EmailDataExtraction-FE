import { Form } from 'antd';
import { useParams } from 'react-router-dom';

import SPContainer from '@/components/atoms/sp-container';
import SPLabel from '@/components/atoms/sp-label';
import DashboardPage from '@/components/layouts/dashboard-page';
import ActionButton from '@/components/molecules/action-button';
import useCreateOrEditSupplier from './containers/useCreateOrEditSupplier';
import FormLabelInput from '@/components/molecules/form-label-input';
import {
  descriptionValidationRules,
  nameValidationRules,
} from '@/validations/supplier';
import IconButton from '@/components/molecules/icon-button';
import { DeleteIcon, PlusHighligtedIcon } from '@/assets/svgs';
import _ from 'lodash';

export default function CreateOrEditSupplier() {
  const params = useParams();

  const { supplierId = null } = params;

  const {
    form,
    onCancel,
    onSubmit,
    createOrEditSupplierLoading,
    emailTypes,
    emailTypesLoading,
    phoneTypes,
    phoneTypesLoading,
    countryData,
    countryDataLoading,
    stateData,
    stateDataLoading,
    cityData,
    cityDataLoading,
    selectedCountry,
    selectedState,
  } = useCreateOrEditSupplier();

  return (
    <DashboardPage
      allowBack
      className="space-y-5"
      heading={!supplierId ? 'Create Supplier' : 'Edit Supplier'}
    >
      <Form
        form={form}
        onFinish={onSubmit}
        scrollToFirstError={{ behavior: 'smooth' }}
      >
        <SPContainer className={'grid grid-cols-1 gap-5'}>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <FormLabelInput
              name={'name'}
              rules={nameValidationRules}
              label="Name"
              placeholder="Name"
            />

            <FormLabelInput.TextArea
              name={'details'}
              rules={descriptionValidationRules}
              label="Details"
              placeholder="Details"
            />
          </div>
          {/* Emails */}
          <Form.List name={['emails']} initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <div className="flex flex-1" key={key}>
                    <div className="mt-4 grid w-full grid-cols-2 gap-4">
                      <FormLabelInput.Select
                        name={[name, 'emailType']}
                        placeholder="Select Email Type"
                        label="Type"
                        loading={emailTypesLoading}
                        options={
                          emailTypes?.map((item) => ({
                            label: item,
                            value: item,
                          })) ?? []
                        }
                      />
                      <FormLabelInput
                        name={[name, 'email']}
                        label="Email"
                        placeholder="Enter Email"
                      />
                    </div>
                    {fields?.length > 1 && (
                      <IconButton
                        onClick={() => remove(name)}
                        type="text"
                        className={`mt-4 h-fit min-w-0 px-2`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </div>
                ))}
                <div
                  className={
                    'mt-2 flex flex-row-reverse gap-1 pl-2 text-sp_gray'
                  }
                >
                  <IconButton
                    onClick={() => add()}
                    type="text"
                    icon={<PlusHighligtedIcon className="text-primary" />}
                  >
                    Add Another
                  </IconButton>
                </div>
              </>
            )}
          </Form.List>

          {/* Phone Numbers */}

          <Form.List name={['phones']} initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <div className="flex flex-1" key={key}>
                    <div className="mt-4 grid w-full grid-cols-2 gap-4">
                      <FormLabelInput.Select
                        name={[name, 'phoneType']}
                        placeholder="Select Phone Type"
                        label="Type"
                        loading={phoneTypesLoading}
                        options={
                          phoneTypes?.map((item) => ({
                            label: item,
                            value: item,
                          })) ?? []
                        }
                      />
                      <FormLabelInput
                        name={[name, 'number']}
                        label="Contact Number"
                        placeholder="Enter Contact Number"
                      />
                    </div>
                    {fields?.length > 1 && (
                      <IconButton
                        onClick={() => remove(name)}
                        type="text"
                        className={`mt-4 h-fit min-w-0 px-2`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </div>
                ))}

                <div
                  className={
                    'mt-2 flex flex-row-reverse gap-1 pl-2 text-sp_gray'
                  }
                >
                  <IconButton
                    onClick={() => add()}
                    type="text"
                    icon={<PlusHighligtedIcon className="text-primary" />}
                  >
                    Add Another
                  </IconButton>
                </div>
              </>
            )}
          </Form.List>

          {/* Addresses */}

          <Form.List name={['addresses']} initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <div className="flex flex-1" key={key}>
                    <div className="mt-4 grid w-full grid-cols-2 gap-4">
                      <FormLabelInput
                        name={[name, 'addressLine1']}
                        label="Address Line One"
                        placeholder="Enter address line"
                      />

                      <FormLabelInput
                        name={[name, 'addressLine2']}
                        label="Address Line Two"
                        placeholder="Enter address line"
                      />
                      <FormLabelInput
                        name={[name, 'addressLine3']}
                        label="Address Line Three"
                        placeholder="Enter address line"
                      />
                      <FormLabelInput
                        name={[name, 'addressLine4']}
                        label="Address Line Four"
                        placeholder="Enter address line"
                      />

                      <FormLabelInput
                        name={[name, 'zipCode']}
                        label="Zip Code"
                        placeholder="Enter zip code"
                      />
                      <FormLabelInput
                        name={[name, 'zipCodeExt']}
                        label="Zip Code Extension"
                        placeholder="Enter zip code extension"
                      />
                    </div>
                    {fields?.length > 1 && (
                      <IconButton
                        onClick={() => remove(name)}
                        type="text"
                        className={`mt-4 h-fit min-w-0 px-2`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    )}
                  </div>
                ))}
                <div
                  className={
                    'mt-2 flex flex-row-reverse gap-1 pl-2 text-sp_gray'
                  }
                >
                  <IconButton
                    onClick={() => add()}
                    type="text"
                    icon={<PlusHighligtedIcon className="text-primary" />}
                  >
                    Add Another
                  </IconButton>
                </div>
              </>
            )}
          </Form.List>

          <div className="flex flex-1">
            <div className="mt-4 grid w-full grid-cols-2 gap-4">
              <FormLabelInput.Select
                name={'countryId'}
                placeholder="Select Country"
                label="Country"
                loading={countryDataLoading}
                options={
                  countryData?.map((item: any) => ({
                    label: item?.name ?? item?.currencyCode,
                    value: item?.id,
                  })) ?? []
                }
              />

              <FormLabelInput.Select
                name={'stateId'}
                placeholder="Select State"
                label="State"
                loading={stateDataLoading}
                options={
                  stateData?.map((item: any) => ({
                    label: item?.name ?? item?.code,
                    value: item?.id,
                  })) ?? []
                }
                disabled={Boolean(!selectedCountry)}
              />

              <FormLabelInput.Select
                name={'cityId'}
                placeholder="Select City"
                label="City"
                loading={cityDataLoading}
                options={
                  cityData?.map((item: any) => ({
                    label: item?.name ?? item?.code,
                    value: item?.id,
                  })) ?? []
                }
                disabled={Boolean(!selectedCountry) && Boolean(!selectedState)}
              />
            </div>
          </div>
          <div className="my-4 flex items-end justify-end">
            <div className="flex flex-1 gap-4 md:flex-initial  md:items-center md:justify-center">
              <ActionButton onClick={onCancel}>
                <SPLabel className="font-bold">Cancel</SPLabel>
              </ActionButton>

              <ActionButton
                loading={createOrEditSupplierLoading}
                htmlType="submit"
                type="primary"
              >
                <SPLabel className="font-bold">
                  {!supplierId ? 'Create' : 'Update'}
                </SPLabel>
              </ActionButton>
            </div>
          </div>
        </SPContainer>
      </Form>
    </DashboardPage>
  );
}
