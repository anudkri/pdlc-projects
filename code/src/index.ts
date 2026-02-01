import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createLogger } from './utils/logger';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;
const logger = createLogger('PDLC-11');

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version || '0.1.0'
  });
});

// Root endpoint
app.get('/api/v1/info', (req: Request, res: Response) => {
  res.json({
    name: 'PDLC-11',
    architecture: 'Unknown Architecture',
    version: '0.1.0',
    uptime: process.uptime()
  });
});

// Error handler
app.use((err: any, req: Request, res: Response, next: any) => {
  logger.error(err);
  res.status(500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    error: 'Not Found',
    path: req.path
  });
});

app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`);
  logger.info(`📐 Architecture: Unknown Architecture`);
  logger.info(`Environment: ${process.env.NODE_ENV}`);
});
