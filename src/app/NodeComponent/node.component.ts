import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProjectGroup, Project,Module } from '../app.component';


@Component({
  selector: 'node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css',
  '../app.component.css']
})
export class NodeComponent implements OnInit {
  
    @Input() nodeData;
    @Input() depth;
    @Output() module = new EventEmitter<Module>();

    // Declare a class object to track the edit mode
    isEdit : boolean = false;

    NodeComponent(){}

    ngOnInit(){
      this.depth = this.depth+10;
    }

    selectModule(module,event){
//      console.log("Module selected");
//      console.log(module);
      // Check to see if this is a root event
      if(event.root == undefined){
        event.root = module;
        event.action = "select";
      }

      this.module.emit(event);

    }

    editModuleHandler(data : Module){
      this.isEdit = true;
    }

    saveModuleHandler(data : Module,event){
      this.isEdit = false; 
      event.root=data;
      event.action = "save";  
      this.module.emit(event);
   
    }

    deleteModuleHandler(module,event){
      if(event.root == undefined){
        event.root = module;
        event.action = "delete";
      }
       this.module.emit(event);
    }

    addNodeHandler(){
      let newNode : Module = new Module();
      newNode.id=23;
      // Check to see if the modules colleciton has been initialized
      if(this.nodeData.modules == undefined){
        this.nodeData.modules = new Array();
      }
      this.nodeData.modules.push(newNode);
    }
}