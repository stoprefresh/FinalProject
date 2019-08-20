import { EmergencyContact } from './emergency-contact';
<<<<<<< HEAD
import { User } from './user';


export class Patient {
    //Fields
    id: number;
	contacts: EmergencyContact[];
    user: User;
    qrcode: String;
	dnr: Boolean;
	birthdate: Date;
	sex: String;
	height: number;
    weight: number;
    
    //Constructor
    constructor(id?: number,
        contacts?: EmergencyContact[],
        user?: User,
        qrcode?: String,
        dnr?: Boolean,
        bithdate?: number,
        sex?: String,
        height?: number,
        weight?: number
        ){
            this.id = id;
            this.contacts = contacts;
            this.user = user;
            this.qrcode = qrcode;
            this.dnr = dnr;
            this.birthdate = this.birthdate;
            this.sex = sex;
            this.height = height;
            this.weight = weight;
        }
=======
import { Allergy } from './allergy';
import { BloodType } from './blood-type';
import { Diagnosis } from './diagnosis';
import { Note } from './note';
import { ApprovedProvider } from './approved-provider';
import { Medication } from './medication';
import { User } from './user';

export class Patient {
  id: number;
  EmergencyContacts: EmergencyContact [];
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
  medList: Medication [];

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
              medList?: Medication []) {
      this.id = id;
      this.EmergencyContacts = contacts;
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
      this.medList = medList;
    }
>>>>>>> 9c6c3c58caa1a91c348b55d37ef2544acbf436ef
}
