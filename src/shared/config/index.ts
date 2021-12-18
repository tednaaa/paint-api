import { config } from 'dotenv';

config();

export const { PORT, CORS_CLIENT_URL, WEBSOCKET_PORT } = process.env;
