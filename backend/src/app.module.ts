import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SeriesModule } from './series/series.module';
import { PersonajesModule } from './personajes/personajes.module';
import { Serie } from './series/serie.model';
import { Personaje } from './personajes/personaje.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',  // en docker-compose será "db"
      port: parseInt(process.env.DB_PORT ?? '3306', 10),
      username: process.env.DB_USER || 'nestangular',
      password: process.env.DB_PASS || 'NA123456',
      database: process.env.DB_NAME || 'anime90s',
      models: [Serie, Personaje],
      autoLoadModels: true,
      synchronize: false, // cuidado: true recrea tablas, mejor false si usas init.sql
    }),
    SeriesModule,
    PersonajesModule,
  ],
})
export class AppModule {}
