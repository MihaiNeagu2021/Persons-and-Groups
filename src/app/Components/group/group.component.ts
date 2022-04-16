import { Component, OnInit } from '@angular/core';
import { GroupService } from 'src/app/Services/group.service';
import { GroupData } from 'src/app/Types/group-data';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  public groupList: GroupData[] = [];

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.groupList=this.groupService.getAllGroups()
  }

  createGroup(groupName) {
    const group: GroupData = {
      name: groupName,
      persons:[],
      dateCreated: new Date(),
      dateUpdated: new Date(),
    };

    this.groupService.createGroup(group);
    this.groupList = this.groupService.getAllGroups();
  }

  deleteGroup(){
    this.groupService.deleteGroup()
  }
}
