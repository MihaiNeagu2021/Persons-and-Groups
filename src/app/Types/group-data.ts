import { PersonData } from '../Types/person-data';

export interface GroupData {
  name:string;
  persons:Array<PersonData>;
  dateCreated:Date;
  dateUpdated:Date
}
