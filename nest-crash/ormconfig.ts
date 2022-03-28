import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://postgres:postgres_pass@localhost:5435/nest_learn',
  entities: [ 'dist/src/db/entities/libs/*.entity.{js,ts}' ],
  synchronize: false,
  migrations: [
    'dist/src/db/migrations/*.{js,ts}',
  ],
  cli: {
    entitiesDir: 'src/db/entities/libs',
    migrationsDir: 'src/db/migrations',
  },
};

export default config;
