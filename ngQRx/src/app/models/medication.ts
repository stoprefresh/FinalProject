import { Drug } from './drug';

export class Medication {
  id: number;
  medName: string;
  drug: Drug;
  startDate: Date;
  discontinuedDate: Date;
  directions: string;
  reasonDiscontinued: string;
  active: boolean;

  constructor(
    id?: number,
    medName?: string,
    productTypeName?: string,
    productNDC?: string,
    drug?: Drug,
    startDate?: Date,
    discontinuedDate?: Date,
    reasonDiscontinued?: string,
    active?: boolean
  ) {
    this.id = id;
    this.medName = medName;
    this.drug = drug;
    this.startDate = startDate;
    this.discontinuedDate = discontinuedDate;
    this.reasonDiscontinued = reasonDiscontinued;
    this.active = active;
  }
}
