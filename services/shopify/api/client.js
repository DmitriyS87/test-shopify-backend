const storeDomain = process.env.SHOPIFY_HOST;
const accessToken = process.env.SHOPIFY_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_API_VERSION;

import { createAdminApiClient } from "@shopify/admin-api-client";

export const client = createAdminApiClient({
  storeDomain,
  apiVersion,
  accessToken,
});
