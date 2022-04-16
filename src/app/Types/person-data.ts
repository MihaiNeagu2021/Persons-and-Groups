export interface PersonData {
    firstName:string;
    lastName:string;
    jobTitle:string;
    groups?:Array<string>;
    dateCreated?:Date;
    dateUpdated:Date
}
