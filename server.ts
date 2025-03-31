import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import pdfGenerator from './src/api/pdf-generator';
import { AddressInfo } from 'net';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const DEFAULT_PORT = 3001;
const MAX_PORT_ATTEMPTS = 10;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', pdfGenerator);

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Function to try starting the server on different ports
const startServer = async (startPort: number) => {
  for (let port = startPort; port < startPort + MAX_PORT_ATTEMPTS; port++) {
    try {
      const server = app.listen(port);
      const address = server.address() as AddressInfo;
      console.log(`Server running on port ${address.port}`);
      return server;
    } catch (err) {
      if (port === startPort + MAX_PORT_ATTEMPTS - 1) {
        throw new Error(`Could not find an available port after ${MAX_PORT_ATTEMPTS} attempts`);
      }
      console.log(`Port ${port} is in use, trying next port...`);
    }
  }
};

// Start the server
startServer(DEFAULT_PORT).catch(error => {
  console.error('Failed to start server:', error);
  process.exit(1);
}); 