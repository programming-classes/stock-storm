import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SymbolModule } from './stock-symbols/symbols.module';

@Module({
  imports: [SymbolModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
