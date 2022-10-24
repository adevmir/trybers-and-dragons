import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private energy: EnergyType;
  private static created = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Mage.created += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.created;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Mage;