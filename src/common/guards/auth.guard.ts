import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { config } from 'src/config';
import { UsersService } from 'src/modules/users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private usersService: UsersService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractToken(request);
    const payload = this.verifyToken(token);
    const user = await this.getUserFromPayload(payload);
    request.user = user;
    return true;
  }

  private extractToken(request: any): string {
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header not found');
    }

    const [bearer, token] = authHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException(
        'Invalid authorization format. Expected format: Bearer [token]',
      );
    }

    return token;
  }

  private verifyToken(token: string): any {
    try {
      const payload = this.jwtService.verify(token, {
        secret: config.appKey,
      });

      if (!payload || !payload.uid) {
        throw new UnauthorizedException('Invalid token');
      }

      return payload;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  private async getUserFromPayload(payload: any) {
    const user = await this.usersService.findOne(payload.uid);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    return user;
  }
}
