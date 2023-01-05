import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as requestIp from 'request-ip';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  private body = new Logger('BODY');
  private query = new Logger('QUERY');

  use(req: Request, res: Response, next: NextFunction) {
    res.on('finish', () => {
      this.logger.log(
        `${requestIp.getClientIp(req)} ${req.method} ${res.statusCode}`,
        req.originalUrl,
      );
      this.body.log(JSON.stringify(req.body, null, 2));
      this.query.log(JSON.stringify(req.query, null, 2));
    });

    next();
  }
}
