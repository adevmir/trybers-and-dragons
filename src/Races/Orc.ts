import Race from './Race';

class Orc extends Race {
  private lifePoints: number;
  private static created = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 74;
    Orc.created += 1;
  }
    
  static createdRacesInstances(): number {
    return Orc.created;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Orc; 
