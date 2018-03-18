import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectGroup, Project,Module,Scenario } from '../app.component';

@Component({
    selector: 'scenario-outline',
    templateUrl: './scenarioOutline.component.html',
    styleUrls: ['./scenarioOutline.component.css',
            '../app.component.css']
  })
  export class ScenarioOutlineComponent implements OnInit{

    @Input() currentModule;

    depth:number = 10;
//    currentModule : Module= new Module();
  

ScenarioOutlineComponent(){}

  ngOnInit(){
  }

  getProject(event){
    console.log("Event received");
    console.log(event);
 //   this.currentProject = event;
  }
}
