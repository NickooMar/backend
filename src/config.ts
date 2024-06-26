import 'dotenv/config';

class Config {
  get appKey() {
    return this.getEnv('APP_KEY');
  }

  get typeOrmConfig() {
    return {
      host: this.getEnv('DATABASE_HOST'),
      port: Number(this.getEnv('DATABASE_PORT')),
      username: this.getEnv('DATABASE_USERNAME'),
      password: this.getEnv('DATABASE_PASSWORD'),
      database: this.getEnv('DATABASE_NAME'),
    };
  }

  get port() {
    return Number(this.getEnv('PORT'));
  }

  get swaggerConfig() {
    return {
      title: 'AFRUS API',
      description:
        'API for AFRUS project using NestJS and TypeORM with PostgreSQL database.',
      version: '1.0',
    };
  }

  getEnv(key: string) {
    if (!process.env[key]) {
      throw new Error(`Environment variable ${key} is not set`);
    }
    return process.env[key];
  }
}

export const config = new Config();
