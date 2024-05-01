import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateHumanDto } from './dto/create-human.dto';
import { HumansService } from './humans.service';

@Controller('humans')
export class HumansController {
  constructor(private readonly humansService: HumansService) {}
  // GET /humans
  @Get()
  getHumans(@Query('age') age: string) {
    return this.humansService.getHumans(+age);
  }
  // GET /humans/:id
  @Get(':id')
  getOneHumans(@Param('id') id: string) {
    return this.humansService.getHumans(+id);
  }
  // POST /humans
  @Post()
  createHumans(@Body() createHumanDto: CreateHumanDto) {
    return this.humansService.createHuman(createHumanDto);
  }
  // PUT /humans/:id
  @Put(':id')
  updateHumans(
    @Param('id') id: string,
    @Body() createHumanDto: CreateHumanDto,
  ) {
    return this.humansService.updateHuman(+id, createHumanDto);
  }
  // DELETE /humans/:id
  @Delete(':id')
  deleteHumans(@Param('id') id: string) {
    return this.humansService.deleteHuman(+id);
  }
}
