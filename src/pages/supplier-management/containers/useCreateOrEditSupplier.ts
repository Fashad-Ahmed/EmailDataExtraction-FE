import { useForm, useWatch } from 'antd/es/form/Form';
import { useNavigate } from 'react-router-dom';
import { AxiosMethodEnum } from '@/utils/enums/general.enum';
import { API_ROUTES } from '@/utils/constants/api-route.constant';
import usePostApi from '@/hooks/usePostApi';
import useGetApi from '@/hooks/useGetApi';

export default function useCreateOrEditSupplier(supplierId?: string | null) {
  const [form] = useForm();
  const navigate = useNavigate();

  const selectedCountry = useWatch('countryId', form);
  const selectedState = useWatch('stateId', form);

  const {
    mutateAsync: createOrEditSupplier,
    isPending: createOrEditSupplierLoading,
  } = usePostApi({
    url: supplierId
      ? `${API_ROUTES.supplier.createOrRead}${supplierId}`
      : API_ROUTES.supplier.createOrRead,
    invalidate: [['supplier']],
    method: supplierId ? AxiosMethodEnum.PATCH : AxiosMethodEnum.POST,
    showSuccessMessage: true,
    showErrorMessage: true,
    onSuccess: () =>
      navigate(
        supplierId
          ? `/supplier-management/view/${supplierId}`
          : '/supplier-management'
      ),
  });

  const { data: emailTypes, isPending: emailTypesLoading } = useGetApi<
    string[]
  >({
    key: [['enum', 'email-type']],
    url: `${API_ROUTES.enums.emailType}`,
  });

  const { data: phoneTypes, isPending: phoneTypesLoading } = useGetApi<
    string[]
  >({
    key: [['enum', 'phone-type']],
    url: `${API_ROUTES.enums.phoneType}`,
  });

  const { data: countryData, isPending: countryDataLoading } = useGetApi<
    string[]
  >({
    key: [['country']],
    url: `${API_ROUTES.country.country}`,
  });

  const { data: stateData, isPending: stateDataLoading } = useGetApi<string[]>({
    key: [['state', selectedCountry!]],
    url: `${API_ROUTES.area.area}`,
    query: {
      level: 1,
      countryId: selectedCountry,
    },
    enabled: Boolean(selectedCountry),
  });

  const { data: cityData, isPending: cityDataLoading } = useGetApi<string[]>({
    key: [['city', selectedCountry!, selectedState!]],
    url: `${API_ROUTES.area.area}`,
    query: {
      level: 2,
      countryId: selectedCountry,
      parentAreaId: selectedState,
    },
    enabled: Boolean(selectedCountry) && Boolean(selectedState),
  });

  function onSubmit(values: any) {
    const payload = {
      county: '222_countttttyyyy',
      ...values,
    };
    createOrEditSupplier(payload);
  }

  function onCancel() {
    navigate(-1);
  }

  return {
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
    selectedCountry,
    selectedState,
    cityData,
    cityDataLoading,
  };
}
