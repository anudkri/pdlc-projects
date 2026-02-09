import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'PDLC-24' });
});

app.get('/api/v1/info', (req: Request, res: Response) => {
  res.json({
    name: 'PDLC-24',
    architecture: 'Unknown Architecture',
    version: '0.1.0'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Architecture: Unknown Architecture`);
});
