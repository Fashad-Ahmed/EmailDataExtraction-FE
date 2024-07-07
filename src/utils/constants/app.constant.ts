const location = window.location;
const isStaging = location.hostname.includes('staging');
const versionNumber = '1';
export const APP_CONFIG = {
  app: {
    name: import.meta.env.VITE_APP_NAME || 'EMAIl_DATA_EXTRACTION',
  },
  api: {
    baseUrl:
      `http://3.143.207.242:8080/v${versionNumber}/api` ||
      // `http://localhost:8080/v${versionNumber}/api`

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
