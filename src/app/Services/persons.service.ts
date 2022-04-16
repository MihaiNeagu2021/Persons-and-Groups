import { Injectable } from '@angular/core';
import { PersonData } from '../Types/person-data';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  public persons: PersonData[] = [];
  constructor() {}

  addPerson(personData: PersonData) {
    this.persons.push(personData);
    localStorage.setItem('persons', JSON.stringify(this.persons));
  }

  getAllPersons() {
    this.persons = JSON.parse(localStorage.getItem('persons'));

    return this.persons;
  }
  updatePersonById(id, data) {
    this.persons[id].firstName = data.firstName;
    this.persons[id].lastName = data.lastName;
    this.persons[id].jobTitle = data.jobTitle;
    this.persons[id].dateUpdated = data.dateUpdated;
    localStorage.setItem('persons', JSON.stringify(this.persons));
    this.getAllPersons();
  }

  deletePersonById(id) {
    this.persons.splice(id, 1);
    localStorage.setItem('persons', JSON.stringify(this.persons));
  }
  addPersonToGroup(id, group) {
    this.persons[id].groups.push(group);
    localStorage.setItem('persons', JSON.stringify(this.persons));
    this.getAllPersons();
    console.log(this.persons[id].groups);
  }
  removePersonFromGroup(id, groupIndex) {
    this.persons[id].groups.splice(groupIndex, 1);
    localStorage.setItem('persons', JSON.stringify(this.persons));
    this.getAllPersons();
  }
}
