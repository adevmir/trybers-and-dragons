import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private energy: EnergyType;
  private static created = 0;

  constructor(name: string) {
    super(name);
    this.energy = 'stamina';
    Ranger.created += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.created;
  }

  get energyType(): EnergyType {
    return this.energy;
  }
}

export default Ranger;