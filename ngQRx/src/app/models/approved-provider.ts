import { Patient } from './patient';
import { Medication } from './medication';
import { Provider } from './provider';

export class ApprovedProvider {

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
