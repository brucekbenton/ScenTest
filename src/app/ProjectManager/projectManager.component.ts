import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectGroup, Project } from '../app.component';

@Component({
  selector: 'projectManager',
  templateUrl: './projectManager.component.html',
  styleUrls: ['./projectManager.component.css',
  '../app.component.css']
})
export class ProjectManagerComponent implements OnInit {
  
  // Declare an input object to store the active project data
//  @Input() project;
  // Declare an object to manage the output vlaue
  @Output() newProject = new EventEmitter<Project>();

    /// Project Group Variables
    // Declare an object to store the Project Group data
    projectGroups : ProjectGroup[] = new Array();;
    // Declare an object to store the current Project Group
    currentProjectGroup = {};
    // Declare an object to store the new Project Group
    newProjectGroup = {};
    // Declare an object to store the new project group info for the Create option
    newCreateProjectGroup : ProjectGroup;

    /// Project variables
    // Declare a class variale to store the current project
    currentProject : Project = new Project();
    // Declare an object array to store the projects collection for the current PRoject Group
    projects : Project[] = new Array();
    insertProject = false;
    // Declare an object to indicate that the project module is in edit mode
    projectEditMode = false;

    ProjectManagerComponent(){


    }

    ngOnInit(){
      this.projectGroups = this.loadProjectGroups();
    }

    // **************************************************
    // name : loadProjectGroups
    //
    // written by: Bruce Benton
    //
    // description: 

    /**
     * @name:loadProjectGroups
     * 
     * @author: Bruce Benton
     * 
     * @description: basic load function to retrieve the defined set of project groups
     */
    loadProjectGroups(){
      let groups : ProjectGroup[] = new Array();



    
      // Create a test data collection for projects
      groups = [
        {
          id:1,
          name :'group 1',
          description : "sample group 1",
          owner:'bbenton',
          projects : [
            {
              id:1,
              name:'Project 1',
              description:'first sample project',
              owner:'bbenton',
              modules:[
                {
                  id:1
                  ,name:"root node"
                  ,owner:"bbenton"
                  ,description:"Sample root node"
                  ,coverage:false
                  ,modules:[
                    {
                      id:3
                      ,name:"child 1"
                      ,owner:"bbenton"
                      ,description:"Sample root node"
                      ,coverage:false
                      ,modules:[
                        {
                          id:4
                          ,name:"child 1a"
                          ,owner:"bbenton"
                          ,description:"Sample root node"
                          ,coverage:false
                          ,modules:[]
                          ,scenarios:[]
                        }
                      ]
                      ,scenarios:[
                        {
                          id:7
                          ,scenario:"Sample scenario"
                          ,priority:0
                          ,testCases:[]
                        }
                        ,{
                          id:8
                          ,scenario:"Second scenario"
                          ,priority:1
                          ,testCases:[]
                        }                      ]
                    }
                    ,{
                      id:6
                      ,name:"child 2"
                      ,owner:"bbenton"
                      ,description:"Sample root node"
                      ,coverage:false
                      ,modules:[]
                      ,scenarios:[]
                    }                  ]
                  ,scenarios:[]
                }                               
              ],
            }
            ,{
              id:2,
              name:'Project 2',
              description:'Second sample project',
              owner:'bbenton',
              modules:[
                {
                  id:5
                  ,name:"root module"
                  ,owner:"bbenton"
                  ,description:"Sample root module for project 2"
                  ,coverage:false
                  ,modules:[]
                  ,scenarios:[]
                }
              ]
            }          
          ]
        }
      ]
      return(groups);
    }
        /// Project methods

  /** ***********************************************************************
   * @name:
   * 
   * @author: Bruce Benton
   * 
   * @description
   * 
   * @param 
   * @memberof ProjectOutlineComponent
   *  ************************************************************************/      
  getCurrentProjectModules() {
          var index = 0;
          // reset the modules collection
//          this.modules = [];
  
//          var moduleCount = this.currentProject.modules[0].modules.length;
          // loop over the top level modules collection in the current project
//          while (index < moduleCount) {
//              this.modules.push(currentProject.modules[0].modules[index].Name);
//              index = index + 1;
//          }
      }
  
      // Declare an event handler for the project selection
  /** ***********************************************************************
   * @name:
   * 
   * @author: Bruce Benton
   * 
   * @description
   * 
   * @param 
   * @memberof ProjectOutlineComponent
   *  ************************************************************************/      
  selectProjectHandler = function (project) {
      let dummy : number = 7/0;
//      console.log("Selected new project");
//      console.log(project);
          var currentIndex;
          this.highlight = 1;
          this.currentProject = project;
 //          this.currentProjectID = this.currentProject.ID;
          // Reset the scenario display
//          this.scenarios = {};
//          this.currentModule = undefined;
          currentIndex = this.getProjectIndex(project);
          // reset current collection values
//          this.currentScenario = {};
//          this.currentModule = {};
//          this.currentTestCase = {};
  
          // Temp code to initialize maxScenarioID

          // Update the input parameter with the current project value
          this.newProject.emit(project);
  
      }
  
  /** ***********************************************************************
   * @name:
   * 
   * @author: Bruce Benton
   * 
   * @description
   * 
   * @param 
   * @memberof ProjectOutlineComponent
   *  ************************************************************************/      
  getProjectIndex = function (project) {
          var index = 0;
  
          while (index < this.projects.length) {
              if (project.ID == this.projects[index].ID)
              {
                  break;
              }
              index++;
          }
          return [index];
      }
  
    // Declare an event handler to manage the top level active view
    selectView = function (data, event) {
      if (data == 5) {
          this.showTestCase = !this.showTestCase;
          this.activePanel = false;
      }
      else if (data == 4) {
          this.showDefectSummary = true;
          this.currentView = 4;
      }
      else {
          this.currentView = data;

      }
  }
  
  

  

}