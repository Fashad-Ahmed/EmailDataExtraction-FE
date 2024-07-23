export const API_ROUTES = {
  auth: {
    login: '/public/auth/token',
    refresh: '/auth/token/refresh',
  },
  productCategory: {
    categoryById: '/product-category/',
    createOrRead: '/product-category',
  },
  emailContent: {
    extractEmailData: '/public/email-content',
    extractAllEmails: '/public/email-content/extract',
  },
};

Object.seal(API_ROUTES);
