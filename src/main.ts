import {NestFactory} from '@nestjs/core';
import {SwaggerModule, DocumentBuilder} from '@nestjs/swagger';
import {AppModule} from './app.module';
import {getEnv} from "./utils";

export const IS_PRD = getEnv() === 'prd';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Enable CORS for all origins
    app.enableCors();

    // 보안상 운영은 swagger 해제
    if (!IS_PRD) {
        const config = new DocumentBuilder()
            .setTitle('API')
            .setDescription('Admin')
            .setVersion('1.0')
            .addBearerAuth(
                {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                    name: 'JWT',
                    in: 'header',
                }, 'access-token'
            )  // Bearer 인증 스키마 추가
            .build();
        const document = SwaggerModule.createDocument(app, config);
        SwaggerModule.setup('api', app, document);
    }

    await app.listen(3000);
}

bootstrap();
