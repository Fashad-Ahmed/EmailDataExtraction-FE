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
  products: {
    productById: '/product/',
    createOrRead: '/product',
  },
};

Object.seal(API_ROUTES);
