import { EmergencyContact } from './emergency-contact';
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
}
