import { Patient } from './patient';

export class EmergencyContact {
  id: number;
  patient: Patient;
  relationship: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;

  constructor(id?: number,
    patient?: Patient,
    relationship?: string,
    firstName?: string,
    lastName?: string,
    phone?: string,
    email?: string) {
    this.id = id;
    this.patient = patient;
    this.relationship = relationship;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email;
  }
}
