import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import { ConfigProvider } from 'antd';
import { App as AntApp } from 'antd';
import { theme } from './constants/theme.constants';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <AntApp className="h-full">
        <App />
      </AntApp>
    </ConfigProvider>
  </React.StrictMode>
);
