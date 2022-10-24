import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static created = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.created += 1;
  }
    
  static createdRacesInstances(): number {
    return Elf.created;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf; 
