import Header from '@/components/organisms/header';
import Sidebar from '@/components/organisms/sidebar';
import { cn } from '@/utils/helpers/tailwind.helper';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import _ from 'lodash';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export default function DashboardLayout() {
  const location = useLocation();
  const pathName = location.pathname;

  useEffect(() => {
    const pageTitleFromUrl = _.startCase(
      pathName.split('/').filter((i) => i !== '')[0]
    );

    document.title = `Spruce | ${pageTitleFromUrl}`;
  }, [pathName]);

  return (
    <Layout className={cn('h-screen w-screen overflow-hidden')} hasSider>
      <Sidebar />
      <Layout>
        <Content className={cn('min-h-[120px] overflow-auto')}>
          <Header />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
