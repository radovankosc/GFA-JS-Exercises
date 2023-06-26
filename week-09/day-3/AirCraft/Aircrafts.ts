export class Aircraft {
  _id: string;
  _ammo: number;
  _maxAmmo: number;
  _baseDamage: number;
  _allDamage: number;

  constructor(id: string, maxAmmo: number, baseDamage: number) {
    this._id = id;
    this._ammo = 0;
    this._maxAmmo = maxAmmo;
    this._baseDamage = baseDamage;
    this._allDamage = baseDamage;
  }

  fight(): number {
    this._allDamage += this._baseDamage * this._ammo;
    return this._allDamage;
  }
  getAmmo(): number {
    return this._ammo;
  }

  refillAmmo(ammunition: number): number {
    const ammoNeeded: number = this._maxAmmo - this._ammo;
    if (ammoNeeded > 0) {
      const ammoToRefill = Math.min(ammoNeeded, ammunition);
      this._ammo += ammoToRefill;
      ammunition -= ammoToRefill;
    }
    return ammunition;
  }

  getType(): string {
    return this._id;
  }
  getStatus(): string {
    return (
      "Type: " +
      this._id +
      ", Ammo: " +
      this._ammo +
      ", Base Damage: " +
      this._baseDamage +
      ", All Damage: " +
      this._allDamage +
      "\n"
    );
  }
  isPriority(): boolean {
    if (this._id === "F35") {
      return true;
    } else {
      return false;
    }
  }
}
