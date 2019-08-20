export class BloodType {
  id: number;
  abo: string;
  rh: boolean;

  constructor(id?: number, abo?: string, rh?: boolean) {
    this.id = id;
    this.abo = abo;
    this.rh = rh;
  }
}
