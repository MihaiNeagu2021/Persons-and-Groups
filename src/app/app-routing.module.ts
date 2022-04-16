import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupComponent } from './Components/group/group.component';
import { PersonComponent } from './Components/person/person.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
  { path: 'person/:_id', component: PersonComponent },
  { path: 'group/:_id', component: GroupComponent },
  { path: 'person', component: PersonComponent },
  { path: 'group', component: GroupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
