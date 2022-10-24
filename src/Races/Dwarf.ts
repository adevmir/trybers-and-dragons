import Race from './Race';

class Dwarf extends Race {
  private lifePoints: number;
  private static created = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 80;
    Dwarf.created += 1;
  }
    
  static createdRacesInstances(): number {
    return Dwarf.created;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Dwarf; 
