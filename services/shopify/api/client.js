const storeDomain = process.env.SHOPIFY_HOST;
const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;

import {createAdminApiClient} from '@shopify/admin-api-client';

export const client = createAdminApiClient({
  storeDomain,
  apiVersion: '2024-01',
  accessToken,
});

