import { Form } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { Link, useNavigate } from 'react-router-dom';

import { NNC } from '@/assets/images';
import { GoogleIcon } from '@/assets/svgs';

import SPButton from '@/components/atoms/sp-button';
import SPContainer from '@/components/atoms/sp-container';
import SPLabel from '@/components/atoms/sp-label';
import FormCheckbox from '@/components/molecules/form-checkbox';
import FormLabelInput from '@/components/molecules/form-label-input';
import SocialButton from '@/components/molecules/social-button';

interface LoginForm {
  username: string;
  password: string;
  rememberMe: boolean;
}

export default function Login() {
  const [form] = useForm<LoginForm>();
  const navigate = useNavigate();

  function onSubmit() {
    navigate('/');
  }
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center">
      <SPContainer className="w-96 p-20 ">
        <div className="flex flex-1 items-center justify-center">
          <img src={NNC} alt="nnc_logo" className="mx-auto mb-5 w-40" />
        </div>
        <div className="flex flex-col items-start py-5">
          <h1 className="text-xl font-bold text-primary">Welcome to NNC</h1>
          <p className="text-sm text-secondary opacity-80">Login to continue</p>
        </div>
        <Form
          form={form}
          onFinish={onSubmit}
          scrollToFirstError={{ behavior: 'smooth' }}
          layout="vertical"
          className="grid grid-cols-1 gap-2"
        >
          <FormLabelInput
            name={'email'}
            rules={[
              {
                type: 'email',
                message: 'The input is not valid email',
              },
              {
                required: true,
                message: 'Please enter your email',
              },
            ]}
            placeholder="henryarthur@example.com"
            label="Email Address"
          />

          <FormLabelInput.Password
            name={'password'}
            rules={[
              {
                required: true,
                message: 'Please enter your password',
              },
            ]}
            label="Password"
            placeholder="********"
          />
          <div className="flex justify-between">
            <div className="flex flex-[0.5] items-center justify-start">
              <FormCheckbox name={'rememberMe'}>
                <SPLabel className="text-md font-medium text-primary">
                  Remember me
                </SPLabel>
              </FormCheckbox>
            </div>
            <Form.Item>
              <Link
                to="/"
                // to="/auth/forgot-password"
                className="text-md font-medium text-primary hover:text-primary hover:opacity-90"
              >
                Forgot Password
              </Link>
            </Form.Item>
          </div>
          <SPButton
            // loading={isPending}
            type="primary"
            className="w-full"
            htmlType="submit"
          >
            <SPLabel className="font-bold text-white">Login</SPLabel>
          </SPButton>
        </Form>
        <div className="flex flex-col items-center justify-center gap-4 pt-5 text-primary">
          <p>Or login with</p>
          <div className="flex gap-5">
            <div className="flex justify-center space-x-4">
              <SocialButton icon={<GoogleIcon className="h-6 w-6" />} />
            </div>
          </div>
        </div>
      </SPContainer>
    </div>
  );
}
