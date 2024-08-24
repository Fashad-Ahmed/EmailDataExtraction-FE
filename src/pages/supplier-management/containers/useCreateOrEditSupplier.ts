import { useForm } from 'antd/es/form/Form';
import { useNavigate } from 'react-router-dom';

export default function useCreateOrEditSupplier() {
  const [form] = useForm();
  const navigate = useNavigate();

  function onCancel() {
    navigate(-1);
  }
  return {
    form,
    onCancel,
  };
}
