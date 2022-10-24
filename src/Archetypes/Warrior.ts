import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private energy: EnergyType;
  private static created = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Warrior.created += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.created;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Warrior;