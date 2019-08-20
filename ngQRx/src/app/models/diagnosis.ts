import { Medication } from './medication';
import { Patient } from './patient';

export class Diagnosis {
  id: number;
  patient: Patient;
  name: string;
  meds: Medication[];
  dateDiagnosed: string;
  dateResolved: string;
  active: boolean;
  icd10: string;

  constructor(id?: number,
              patient?: Patient,
              name?: string,
              meds?: Medication[],
              dateDiagnosed?: string,
              dateResolved?: string,
              active?: boolean,
              icd10?: string) {
        this.patient = patient;
        this.name = name;
        this.meds = meds;
        this.dateDiagnosed = dateDiagnosed;
        this.dateResolved = dateResolved;
        this.active = active;
        this.icd10 = icd10;
              }




}
