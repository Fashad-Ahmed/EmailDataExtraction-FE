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
    extractEmailData: '/email-content',
    extractAllEmails: '/email-content/extract',
  },
  products: {
    productById: '/product/',
    createOrRead: '/product',
  },
  supplier: {
    supplierById: '/supplier/',
    createOrRead: '/supplier',
  },
};

Object.seal(API_ROUTES);
