import { Injectable } from '@nestjs/common';
import { CreateHumanDto } from './dto/create-human.dto';

@Injectable()
export class HumansService {
  private humans = [
    { id: 0, name: 'John', age: 25 },
    { id: 1, name: 'Doe', age: 30 },
  ];

  getHumans(age?: number) {
    if (age) {
      return this.humans.filter((human) => human.age === age);
    }
    return this.humans;
  }

  updateHuman(id: number, updateHumanDto: CreateHumanDto) {
    this.humans = this.humans.map((human) => {
      if (human.id === id) {
        return { ...human, ...updateHumanDto };
      }
      return human;
    });
  }

  deleteHuman(id: number) {
    const tobeDeleted = this.getHumans(id);

    this.humans = this.humans.filter((human) => human.id !== id);
    return tobeDeleted;
  }

  createHuman(createHumanDto: CreateHumanDto) {
    const newHuman = { id: Date.now(), ...createHumanDto };
    this.humans.push(newHuman);

    return newHuman;
  }
}
