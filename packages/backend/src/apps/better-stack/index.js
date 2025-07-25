import defineApp from '../../helpers/define-app.js';
import addAuthHeader from './common/add-auth-header.js';
import auth from './auth/index.js';
import actions from './actions/index.js';

export default defineApp({
  name: 'Better Stack',
  key: 'better-stack',
  iconUrl: '{BASE_URL}/apps/better-stack/assets/favicon.svg',
  authDocUrl: '{DOCS_URL}/apps/better-stack/connection',
  supportsConnections: true,
  baseUrl: 'https://betterstack.com',
  apiBaseUrl: 'https://uptime.betterstack.com/api',
  primaryColor: '#000000',
  beforeRequest: [addAuthHeader],
  auth,
  actions,
});
