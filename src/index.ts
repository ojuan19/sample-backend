import express, { Request, Response } from 'express';
import { json as bodyParserJson } from 'body-parser';
import crypto from 'crypto';

const app = express();

// We need the raw request body for signature verification. So let's do a small
// trick: we'll store the raw body in a buffer, then parse JSON after verification
app.use(
  express.json({
    verify: (req: any, _res, buf: Buffer) => {
      req.rawBody = buf; // store raw buffer on the request
    },
  })
);

const GITHUB_WEBHOOK_SECRET = process.env.GITHUB_WEBHOOK_SECRET || '';


// ----------------------------------------------------------------------------
// Healthcheck or any additional endpoints
// ----------------------------------------------------------------------------
app.get('/', (_req, res) => {
  res.send('App is running');
});

// ----------------------------------------------------------------------------
// 5) Start the Server
// ----------------------------------------------------------------------------
const PORT = process.env.PORT || 3011;

