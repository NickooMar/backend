import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class organizationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { organizationId } = req.params;

    if (!organizationId) {
      return res.status(HttpStatus.UNAUTHORIZED).json({
        message: 'Organization ID is required',
      });
    }

    next();
  }
}
