import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import { ConfigProvider } from 'antd';
import { App as AntApp } from 'antd';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { theme } from './constants/theme.constants';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="436969206006-ie164v82nc6orrivkfu02d54dd9rhu1a.apps.googleusercontent.com">
      <ConfigProvider theme={theme}>
        <AntApp className="h-full">
          <App />
        </AntApp>
      </ConfigProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
