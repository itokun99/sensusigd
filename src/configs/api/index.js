import apiRequest from './config';
import { apiEndpoint } from './url';

const API = {};

// Global / common
API.laporanSensusIgd = apiRequest(apiEndpoint.laporanSensusIgd);

export default API;
