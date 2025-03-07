import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { PetImagesModule } from './pet-images/pet-images.module';
import { ShelterContentsModule } from './shelter-contents/shelter-contents.module';
import { NewsModule } from './news/news.module';
import { StoriesModule } from './stories/stories.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } from './conf';
import { CandidatesModule } from './candidates/candidates.module';
import { SurveyFieldsModule } from './survey-fields/survey-fields.module';
import { SupportsModule } from './supports/supports.module';
import { AdoptersModule } from './adopters/adopters.module';
import { SupportersModule } from './supporters/supporters.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: DB_HOST,
        port: parseInt(DB_PORT) || 3306,
        username: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
    }),
    PetsModule,
    PetImagesModule,
    ShelterContentsModule,
    NewsModule,
    StoriesModule,
    AuthModule,
    CandidatesModule,
    SurveyFieldsModule,
    SupportsModule,
    AdoptersModule,
    SupportersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
