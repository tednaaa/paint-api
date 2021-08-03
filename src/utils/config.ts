import { config } from 'dotenv';
import path from 'path';

config();

export const PORT = process.env.PORT ?? 8080;
export const CORS_CLIENT_URL =
  process.env.CORS_CLIENT_URL ?? 'http://localhost:3000';
export const IMAGES_PATH = path.join(__dirname, '..', '..', 'public', 'images');
