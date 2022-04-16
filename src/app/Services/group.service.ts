import { Injectable } from '@angular/core';
import { GroupData } from '../Types/group-data';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
public groupList:GroupData[]=[]
  constructor() { }

  createGroup(group:GroupData){
    this.groupList.push(group)
    localStorage.setItem('groups', JSON.stringify(this.groupList));
  }

  getAllGroups(){
    this.groupList = JSON.parse(localStorage.getItem('groups'));

    return this.groupList;
  }
  deleteGroup(){
    this.groupList=[];
    localStorage.setItem('groups', JSON.stringify(this.groupList));
  }
  //delete group  by id
  // update group by id
  //get all groups
}
