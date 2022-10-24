import Race from './Race';

class Halfling extends Race {
  private lifePoints: number;
  private static created = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this.lifePoints = 60;
    Halfling.created += 1;
  }
    
  static createdRacesInstances(): number {
    return Halfling.created;
  }
  
  get maxLifePoints(): number {
    return this.lifePoints;
  }
}

export default Halfling; 
