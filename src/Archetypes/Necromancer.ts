import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private energy: EnergyType;
  private static created = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'mana';
    Necromancer.created += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.created;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Necromancer;