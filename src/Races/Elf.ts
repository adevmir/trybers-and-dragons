import Race from './Race';

class Elf extends Race {
  private lifePoints: number;
  private static created = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 99;
    Elf.created += 1;
  }
    
  static createdRacesInstances(): number {
    return Elf.created;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Elf; 
