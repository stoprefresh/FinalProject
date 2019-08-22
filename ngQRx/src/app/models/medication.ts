import { ApprovedProvider } from './approved-provider';
import { Drug } from './drug';
import { Diagnosis } from './diagnosis';

export class Medication {
  id: number;
  medName: string;
  drug: Drug;
  startDate: Date;
  discontinuedDate: Date;
  directions: string;
  reasonDiscontinued: string;
  active: boolean;
  diagnosis: Diagnosis;
  prescriber: ApprovedProvider;

  constructor(
    id?: number,
    medName?: string,
    productTypeName?: string,
    productNDC?: string,
    drug?: Drug,
    startDate?: Date,
    discontinuedDate?: Date,
    reasonDiscontinued?: string,
    active?: boolean,
    diagnosis?: Diagnosis,
    prescriber?: ApprovedProvider
  ) {
    this.id = id;
    this.medName = medName;
    this.drug = drug;
    this.startDate = startDate;
    this.discontinuedDate = discontinuedDate;
    this.reasonDiscontinued = reasonDiscontinued;
    this.active = active;
    this.diagnosis = diagnosis;
    this.prescriber = prescriber;
  }
}
