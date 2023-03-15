// expose the controller
import { Module } from '@nestjs/common';
import { SymbolController } from './symbols.controller';
@Module({
  imports: [],
  controllers: [SymbolController],
  providers: [],
})
export class SymbolModule {}
