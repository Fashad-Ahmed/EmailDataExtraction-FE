export const QUERY_STRING = {
  PAGINATION: {
    LIMIT: '_limit',
    PAGE: '_page',
  },
  OTHER_PARAMS: {
    SEARCH: '_search',
    FILTERS: {
      DATE_FROM: '_dateFrom',
      DATE_TO: '_dateTo',
    },
  },
};

Object.seal(QUERY_STRING);
