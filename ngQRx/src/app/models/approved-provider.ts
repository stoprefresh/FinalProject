import { Patient } from './patient';
import { Provider } from '@angular/core';
import { Medication } from './medication';
import { Identifiers } from '@angular/compiler';

export class ApprovedProvider {
  // TODO

  id: number;
  patient: Patient;
  provider: Provider;
  medications: Medication[];
  approvedDate: Date;

  constructor(
    id?: number,
    patient?: Patient,
    provider?: Provider,
    medications?: Medication[],
    approvedDate?: Date
  ) {
    this.id = id;
    this.patient = patient;
    this.provider = provider;
    this.medications = medications;
    this.approvedDate = approvedDate;
  }
}
