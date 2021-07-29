import { config } from 'dotenv';
import path from 'path';

config();

export const PORT = process.env.PORT ?? 8080;
export const IMAGES_PATH = path.join(__dirname, '..', '..', 'public', 'images');
