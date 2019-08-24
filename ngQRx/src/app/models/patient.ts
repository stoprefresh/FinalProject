import { EmergencyContact } from './emergency-contact';
import { Allergy } from './allergy';
import { BloodType } from './blood-type';
import { Diagnosis } from './diagnosis';
import { Note } from './note';
import { ApprovedProvider } from './approved-provider';
import { Medication } from './medication';
import { User } from './user';

export class Patient {
  id: number;
  emergencyContacts: EmergencyContact [];
  user: User;
  qrcode: string;
  dnr: boolean;
  birthdate: Date;
  sex: string;
  height: number;
  weight: number;
  bloodType: BloodType;
  allergies: Allergy [];
  diagnoses: Diagnosis [];
  personalNotes: Note [];
  approvedProviders: ApprovedProvider [];
  medicationList: Medication [];

  constructor(id?: number,
              contacts?: EmergencyContact [],
              user?: User,
              qrcode?: string,
              dnr?: boolean,
              birthdate?: Date,
              sex?: string,
              height?: number,
              weight?: number,
              bloodType?: BloodType,
              allergies?: Allergy [],
              diagnoses?: Diagnosis [],
              notes?: Note [],
              approvedProviders?: ApprovedProvider [],
              medicationList?: Medication []) {
      this.id = id;
      this.emergencyContacts = contacts;
      this.user = user;
      this.qrcode = qrcode;
      this.dnr = dnr;
      this.birthdate = birthdate;
      this.sex = sex;
      this.height = height;
      this.weight = weight;
      this.bloodType = bloodType;
      this.allergies = allergies;
      this.diagnoses = diagnoses;
      this.personalNotes = notes;
      this.approvedProviders = approvedProviders;
      this.medicationList = medicationList;
    }
}
