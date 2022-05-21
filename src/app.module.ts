import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PatientModule } from './patient/patient.module'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'infrastructure/mpbox.sqlite',
            synchronize: true,
            logging: false,
            autoLoadEntities: true
            //entities: ['dist/**/*.entity.js']
            //entities: [__dirname + '/../**/*.entity{.ts,.js}']
        }),
        PatientModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
