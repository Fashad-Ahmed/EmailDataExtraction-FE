const location = window.location;
const isStaging = location.hostname.includes('staging');
export const APP_CONFIG = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'EMAI_DATA_EXTRACTION',
  },
  api: {
    baseUrl:
      import.meta.env.VITE_API_BASE_URL ||
      (isStaging
        ? `https://api-spruce-staging.appnofy.com`
        : 'https://api-spruce.appnofy.com'),

    assetsUrl:
      import.meta.env.VITE_ASSETS_BASE_URL ||
      'https://spruce-assets-dev.s3.amazonaws.com',
  },
  week: [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ],
};

Object.seal(APP_CONFIG);
