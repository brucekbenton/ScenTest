import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { ProjectDataService } from './ProjectDataService/projectData.service';



import { AppComponent } from './app.component';
import { NodeComponent } from './NodeComponent/node.component';
import { ProjectManagerComponent } from './ProjectManager/projectManager.component';
import { ProjectOutlineComponent } from './ProjectOutline/projectOutline.component';
import { ScenarioOutlineComponent } from './ScenarioOutline/scenarioOutline.component';


@NgModule({
  declarations: [
    AppComponent
    ,NodeComponent
    ,ProjectManagerComponent
    ,ProjectOutlineComponent
    ,ScenarioOutlineComponent
  ],
  imports: [
    FormsModule
    ,BrowserModule
    ,HttpModule
  ],
  providers: [ProjectDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
