import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('humans')
export class HumansController {
  // GET /humans
  @Get()
  getHumans() {
    return [];
  }
  // GET /humans/:id
  @Get(':id')
  getOneHumans() {
    return {};
  }
  // POST /humans
  @Post()
  createHumans() {
    return {};
  }
  // PUT /humans/:id
  @Put(':id')
  updateHumans() {
    return {};
  }
  // DELETE /humans/:id
  @Delete(':id')
  deleteHumans() {
    return {};
  }
}
