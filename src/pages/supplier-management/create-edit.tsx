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

export default function CreateOrEditSupplier() {
  const params = useParams();

  const { supplierId = null } = params;

  const { form, onCancel } = useCreateOrEditSupplier();

  return (
    <DashboardPage
      allowBack
      className="space-y-5"
      heading={!supplierId ? 'Create Supplier' : 'Edit Supplier'}
    >
      <Form
        form={form}
        // onFinish={onSubmit}
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
          <Form.List name={['emails']} initialValue={[{}]}>
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name }) => (
                  <div className="flex flex-1" key={key}>
                    <div className="mt-4 grid w-full grid-cols-2 gap-4">
                      <FormLabelInput.Select
                        name={[name, 'codeType']}
                        label="Type Of Code"
                        placeholder="Select type"
                      />
                      <FormLabelInput
                        name={[name, 'code']}
                        label="Code"
                        placeholder="Enter Code"
                      />
                      <FormLabelInput
                        name={[name, 'details']}
                        className="col-span-1"
                        label="Details (Optional)"
                        placeholder="Enter Details..."
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
                <IconButton
                  onClick={() => add()}
                  type="text"
                  className={'mt-2 justify-end gap-1 pl-2 text-sp_gray'}
                  icon={<PlusHighligtedIcon className="text-primary" />}
                >
                  Add Another
                </IconButton>
              </>
            )}
          </Form.List>

          <div className="my-4 flex items-end justify-end">
            <div className="flex flex-1 gap-4 md:flex-initial  md:items-center md:justify-center">
              <ActionButton onClick={onCancel}>
                <SPLabel className="font-bold">Cancel</SPLabel>
              </ActionButton>
            </div>
          </div>
        </SPContainer>
      </Form>
    </DashboardPage>
  );
}
