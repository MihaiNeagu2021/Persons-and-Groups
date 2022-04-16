import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './Components/person/person.component';
import { GroupComponent } from './Components/group/group.component';
import { PersonsService } from './Services/persons.service';
import { GroupService } from './Services/group.service';
import { EditPersonComponent } from './Pages/edit-person/edit-person.component';
import { EditGroupComponent } from './Pages/edit-group/edit-group.component';
import { HomeComponent } from './Pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    GroupComponent,
    EditPersonComponent,
    EditGroupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonsService,GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
