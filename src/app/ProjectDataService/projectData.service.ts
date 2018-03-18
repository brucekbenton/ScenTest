import { Injectable } from '@angular/core'
import { Headers, Http, Response,HttpModule } from '@angular/http'

@Injectable() export class ProjectDataService{

    constructor(private http : Http){

    }
 
  /** ***********************************************************************
   * @name: saveProjectData
   * 
   * @author: Bruce Benton
   * 
   * @description
   * 
   * @param 
   * @memberof ProjectOutlineComponent
   *  ************************************************************************/   
  saveProjectData(projectData) : Promise<Object>{

//    let promise:any;
    
    var targetUrl;
    var headers = {};
    targetUrl = "http://localhost:8888/saveFile?file="+"/Users/brucekbenton/data/scenTest/sample.json";

    var body = JSON.stringify(projectData,null,'  ');
    let data : Object;

    return this.http.put(targetUrl,{header : headers},{body:body})
        .toPromise()
        .then(response=>{
          if(response.status == 200){
            data = JSON.parse(response['_body']);
//            response.data = data;
          }
          return(response);
        },
        function(response){
          return(response);
        }
      );
    }
    
//    return(promise);

//  }
}