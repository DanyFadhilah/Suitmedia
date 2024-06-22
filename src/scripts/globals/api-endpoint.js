import CONFIG from './config';

const API_ENDPOINT = {
  IDEAS: `${CONFIG.BASE_URL}/ideas`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/ideas/detail/${id}`,
};

export default API_ENDPOINT;
