import 'reflect-metadata';
import 'dotenv/config';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'demo_sdd',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: false,
  entities: ['src/modules/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
});
