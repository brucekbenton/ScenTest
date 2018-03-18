import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectManagerComponent } from './ProjectManager/projectManager.component'

const SampleData = [{
  "name":"root node",
  "owner":"bbenton",
  "description":"Sample root node",
  "coverage":false,
  "nodes":[
    {
      "name":"child 1",
      "owner":"bbenton",
      "description":"child 1 description",
      "coverage":false,
      "nodes":[
        {
          "name":"child 1a",
          "owner":"bbenton",
          "description":"child 1a description",
          "coverage":false,
        }
        ,{
          "name":"child 1b",
          "owner":"bbenton",
          "description":"child 1b description",
          "coverage":false,
        }
      ]
    }
    ,    {
      "name":"child 2",
      "owner":"bbenton",
      "description":"child 2 description",
      "coverage":false,
      "nodes":[
        {
          "name":"child 2a",
          "owner":"bbenton",
          "description":"child 2a description",
          "coverage":false,
        }
        ,{
          "name":"child 2b",
          "owner":"bbenton",
          "description":"child 2b description",
          "coverage":false,
        }
      ]
    }
  ]
}]

export enum Priority{
  Low = 0,
  Medium,
  High
}

// Declare a class to represent a functional test case
export class TestCase{
  id : number;
  name : string;
  description : string;
  owner : string;
  automated : boolean;
  automationScript : string;
  priority : Priority;
}

// Declare a class to model functional scenarios
export class Scenario{
  id : number;
  scenario : string;
  owner : string;
  priority : Priority;
  testCases : TestCase[] = new Array();
}

// Declare a class to represent a functional module
export class Module{
  id : number;
  name : string;
  description : string;
  owner : string;
  modules : Module[] = new Array();;
  scenarios : Scenario[] = new Array();
  coverage : boolean;
}

export class Project{
  id : number;
  name : string;
  description : string;
  owner : string;
  modules : Module[] = new Array();;
}

// Declare a class to represent project groups
export class ProjectGroup{
  id : number;
  name : string;
  description : string;
  owner? : string;
  projects : Project[] = new Array();
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Sample App';
  localData = SampleData;
  depth:number = 10;
  currentProject : Project= new Project();
  currentModule : Module = new Module();

  AppComponent(){}

  ngOnInit(){
    console.log("Node Data:");
    console.log(this.localData[0].nodes);
    console.log("Base Depth:" + this.depth)
  }

  getProject(event){
    console.log("Event received");
    console.log(event);
    this.currentProject = event;
  }



}
