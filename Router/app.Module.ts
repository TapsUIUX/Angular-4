import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
//for model driven form control we will be useing Reactive form controll.
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TestcompComponent } from './testcomp/testcomp.component';
import { DataService } from './app.service';
import { CustomPipe } from './custom.pipe';
 
//ROUTER requirements , Component s used inRoute. and RouterModule

import { RouterModule,Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { OutputComponent } from './output/output.component' ;

//Setting Router
const appRoutes : Routes = [
    {path : '',component: FormComponent},
    {path :'about' , component : OutputComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    TestcompComponent,
    FormComponent,
    CustomPipe,
    OutputComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
    RouterModule.forRoot(appRoutes) //  Declaring Router Imports
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
