import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GroupService } from 'src/app/Services/group.service';
import { PersonsService } from 'src/app/Services/persons.service';
import { GroupData } from 'src/app/Types/group-data';
import { PersonData } from 'src/app/Types/person-data';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
})
export class PersonComponent implements OnInit {
  public personForm: FormGroup;
  public persons: PersonData[] = [];
  public showCreatePerson: boolean = false;
  public showEditPerson: boolean = false;
  public currentID: number;
  public currentPersonGroups: string[];
  public allGroups: GroupData[];

  constructor(
    private fb: FormBuilder,
    private personsService: PersonsService,
    private groupService: GroupService
  ) {}

  ngOnInit(): void {
    this.persons = this.personsService.getAllPersons();
    this.allGroups = this.groupService.getAllGroups();
    this.personForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      jobTitle: ['', Validators.required],
      groups: '',
    });
  }

  addPerson() {
    if (this.personForm.valid) {
      const personData: PersonData = {
        firstName: this.personForm.get('firstName').value,
        lastName: this.personForm.get('lastName').value,
        jobTitle: this.personForm.get('jobTitle').value,
        groups: this.personForm.get('groups').value,
        dateCreated: new Date(),
        dateUpdated: new Date(),
      };
      this.personsService.addPerson(personData);
      this.persons = this.personsService.getAllPersons();
    }
    this.showCreatePerson = false;
  }

  editPerson(id) {
    this.personForm.controls['firstName'].setValue(this.persons[id].firstName);
    this.personForm.controls['lastName'].setValue(this.persons[id].lastName);
    this.personForm.controls['jobTitle'].setValue(this.persons[id].jobTitle);
    this.currentID = id;
    this.currentPersonGroups = this.persons[id].groups;
  }
  submitPersonChanges() {
    if (this.personForm.valid) {
      const personData: PersonData = {
        firstName: this.personForm.get('firstName').value,
        lastName: this.personForm.get('lastName').value,
        jobTitle: this.personForm.get('jobTitle').value,
        dateUpdated: new Date(),
      };
      this.personsService.updatePersonById(this.currentID, personData);
    }
    this.showEditPerson = false;
  }

  deletePerson() {
    this.personsService.deletePersonById(this.currentID);
  }
  addGroup(selectedGroup) {
    this.personsService.addPersonToGroup(this.currentID, selectedGroup);
  }
  removeGroup(index) {
    this.personsService.removePersonFromGroup(this.currentID,index);
  }
}
