import { Component, OnInit, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectGroup, Project, Module } from '../app.component';

import { ProjectDataService } from '../ProjectDataService/projectData.service'

/**
 * 
 * 
 * @export
 * @class ProjectOutlineComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'project-outline',
    templateUrl: './projectOutline.component.html',
    styleUrls: ['./projectOutline.component.css',
            '../app.component.css']
  })
  export class ProjectOutlineComponent implements OnInit{

    @Input() currentProject : Project;

    depth:number = -10;
    currentModule : Module = new Module();
  

  constructor(private projectDataService : ProjectDataService){

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
  ngOnInit(){
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
   getProject(event){
    console.log("Event received");
    console.log(event);
    this.currentProject = event;
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
  getModule(event){
    // Declare a local variable to store the parent of the passed in node
    let parent: Module;
    // Declare a variable to index over the root modules
    let index: number = 0;
    if(event.action == "select"){
      this.currentModule = event.root;
    }
    else if(event.action == "delete"){
      // find the index of the selected node
      while(index < this.currentProject.modules.length){
        // check to see if this child matches the search node
        if(this.currentProject.modules[index].id == event.root.id){
          // Delete this node from the collection
          this.currentProject.modules.splice(index,1);
          break;
        }
        parent = this.deleteNode(this.currentProject.modules[index],event.root);
        index++;
      }
    }
    else if(event.action = "save"){
      this.saveData();
    }
    console.log("Module Event received");
    console.log(event.root);
  }

  /** ***********************************************************************
   * @name:
   * 
   * @author: Bruce Benton
   * 
   * @description
   * 
   * @param {Module} rootModule 
   * @param {Module} node 
   * @returns {Module} 
   * @memberof ProjectOutlineComponent
   *  ************************************************************************/
  deleteNode(rootModule: Module,node: Module) : Module{
    let parent : Module = null;
    let index : number=0;
    let module : Module;

    if(this.currentProject.modules !== undefined){
      while(index < rootModule.modules.length){
        let module = rootModule.modules[index];
        // Check to see if any of the children match the target node
        if(module.id == node.id){
//          parent = rootModule;
          // Delete the node from its parent
          parent = rootModule;
          rootModule.modules.splice(index,1);
          break;
        } 
        parent = this.deleteNode(module,node);
        if(parent != null){
          break;
        }
        index++;
      }
    }

    return(parent);
  }


  saveData(){
    let promise : any;

    promise = this.projectDataService.saveProjectData(this.currentProject);

  }

}
