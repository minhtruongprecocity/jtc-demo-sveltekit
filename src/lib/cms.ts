import { buildClient } from '@datocms/cma-client-browser';
import { PUBLIC_DATOCMS_API_TOKEN } from '$env/static/public';

export const cms = buildClient({ apiToken: PUBLIC_DATOCMS_API_TOKEN });
