import { env } from './env';

export const environment = {
  production: true,
  apiUrl: `http://${env.backendURL}:${env.backendPort}`
};
