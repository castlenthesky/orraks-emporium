import { Request, Response, Next} from 'express'

export default function requestLoggerMiddleware (req: Request, res: Response, next: Next) {
  console.info(`${req.method} ${req.originalUrl}`);
  const start = new Date().getTime();
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    console.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${elapsed}ms`)
  })
  next()
}