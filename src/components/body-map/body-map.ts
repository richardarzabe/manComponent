import { Component, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the BodyMapComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'body-map',
  templateUrl: 'body-map.html'
})
export class BodyMapComponent {

  text: string;

  lista:Array<any>=[
    {
      title:"Head",
      id:113,
      dbId:"80222a42-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Frontal",
      id:72,
      dbId:"80cf1136-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Temporal",
      id:71,
      dbId:"81c1444a-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Face",
      id:70,
      dbId:"820d4137-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Jaw",
      id:73,
      dbId:"82693aa1-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Eye Left",
      id:792,
      dbId:"83115b28-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Eye Right",
      id:791,
      dbId:"82c43d55-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Ear Left",
      id:782,
      dbId:"848dd66c-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Ear Right",
      id:781,
      dbId:"84301604-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Nose",
      id:75,
      dbId:"856dbcc3-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Lip",
      id:74,
      dbId:"edcdf938-5afa-11e4-a87d-842b2b4bbc99"
    },
    {
      title:"Cheek",
      id:772,
      dbId:"85d1db28-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Cheek",
      id:771,
      dbId:"85d1db28-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Gum",
      id:76,
      dbId:"862508f4-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Neck",
      id:114,
      dbId:"86df53eb-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"chest",
      id:106,
      dbId:"cc5a4585-eaef-11e5-9a7d-3052cb650342"
    },
    {
      title:"Arm Right",
      id:105,
      dbId:"87705a00-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Elbow Right",
      id:110,
      dbId:"87dc4c57-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Hand Right",
      id:112,
      dbId:"4fdf8cf8-41ee-11e5-b94a-842b2b4bbc99"
    },
    {
      title:"Palm Right",
      id:60,
      dbId:"586fb08f-41ee-11e5-b94a-842b2b4bbc99"
    },
    {
      title:"1st Digit",
      id:61,
      dbId:"89274037-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"2st Digit",
      id:62,
      dbId:"8990090c-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"3st Digit",
      id:63,
      dbId:"89fe37cf-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"4st Digit",
      id:64,
      dbId:"8a76b071-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"5st Digit",
      id:65,
      dbId:"8b579a9e-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Arm Left",
      id:104,
      dbId:"8bc5c409-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Elbow Left",
      id:109,
      dbId:"8c6aa617-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Hand Left",
      id:111,
      dbId:"042eb2d5-41d7-11e5-b94a-842b2b4bbc99"
    },
    {
      title:"Palm Left",
      id:50,
      dbId:"0d99bf0c-41d7-11e5-b94a-842b2b4bbc99"
    },
    {
      title:"1st Digit",
      id:51,
      dbId:"8e15e1e3-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"2st Digit",
      id:52,
      dbId:"8e7a3cc1-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"3st Digit",
      id:53,
      dbId:"8ee36678-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"4st Digit",
      id:54,
      dbId:"8f4ddf8c-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"5st Digit",
      id:55,
      dbId:"8fba5726-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Abdomen",
      id:103,
      dbId:"9140e45a-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Groin",
      id:100,
      dbId:"97365df6-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Thigh Left",
      id:102,
      dbId:"9cbc8501-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Knee Left",
      id:115,
      dbId:"9bb56f6e-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Thigh Right",
      id:101,
      dbId:"9cbc8501-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Knee Right",
      id:116,
      dbId:"9bb56f6e-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Lower Left Leg",
      id:107,
      dbId:"a151ea8c-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Foot Left",
      id:30,
      dbId:"9fa0ee3e-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"1st Digit",
      id:31,
      dbId:"a336b195-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"2st Digit",
      id:32,
      dbId:"a39de610-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"3st Digit",
      id:33,
      dbId:"a3fb099d-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"4st Digit",
      id:34,
      dbId:"a4629e59-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"5st Digit",
      id:35,
      dbId:"a4d2b732-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Lower Right Leg",
      id:108,
      dbId:"9c49072f-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Foot Right",
      id:40,
      dbId:"9a393ee0-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"1st Digit",
      id:41,
      dbId:"9d91fd73-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"2st Digit",
      id:42,
      dbId:"9dfc99a0-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"3st Digit",
      id:43,
      dbId:"9e7a3395-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"4st Digit",
      id:44,
      dbId:"9edc78c8-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"5st Digit",
      id:45,
      dbId:"9f417c46-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Cervical",
      id:216,
      dbId:"671b1001-d71f-11e4-b770-842b2b4bbc99"
    },
    {
      title:"Thoracic",
      id:205,
      dbId:"97d728f3-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Lumbar",
      id:215,
      dbId:"985a9174-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Buttocks",
      id:200,
      dbId:"99cc2170-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Arm Right",
      id:204,
      dbId:"87705a00-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Elbow Right",
      id:209,
      dbId:"87dc4c57-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Hand Right",
      id:211,
      dbId:"4fdf8cf8-41ee-11e5-b94a-842b2b4bbc99"
    },
    {
      title:"Arm Left",
      id:203,
      dbId:"8bc5c409-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Elbow Left",
      id:208,
      dbId:"8c6aa617-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Hand Left",
      id:210,
      dbId:"042eb2d5-41d7-11e5-b94a-842b2b4bbc99"
    },
    {
      title:"Thigh Left",
      id:201,
      dbId:"9cbc8501-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Thigh Right",
      id:202,
      dbId:"9cbc8501-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Foot Right",
      id:207,
      dbId:"9a393ee0-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Foot Left",
      id:206,
      dbId:"9fa0ee3e-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Occipital",
      id:212,
      dbId:"816080c6-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Knee Left",
      id:213,
      dbId:"9bb56f6e-03d9-11e0-8458-b228b30b1b68"
    },
    {
      title:"Knee Right",
      id:214,
      dbId:"9bb56f6e-03d9-11e0-8458-b228b30b1b68"
    },
  ]

  @Output()
  valueUpdate: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    console.log('Hello BodyMapComponent Component');
    this.text = 'Hello World';
  }

 
  valueUpdated($event) {
    // console.log('AboutPage valueUpdated:', $event);
   
  }

   
  CommandNoImageClass(n,m) {
    console.log(n);
    var element = document.getElementById("image" + n);
    var component = document.getElementById("componentBody" + n);

    //console.log(element);
    this.ClearAll(n,m);

    if(element.className.indexOf("noImage") > -1) {//se esta mostrando
      //console.log('estoy');
      //this.GetIdComponent(element);
      this.GetIdComponent(n);
      element.className = element.className.replace(/\bnoImage\b/g, "").trim();

      if(this.IsInPage(component)) {
        component.className = component.className.replace(/\bhiddenImage\b/g, "").trim();
        //console.log('Entro aqui en IsInPage');//Agregado por Richard
      }

      (<HTMLInputElement>document.getElementById("changeBodyPart")).value = n;
    } else {// no se esta mostrando
      //console.log('No entro');
      element.className += element.className ? ' noImage' : 'noImage';
      (<HTMLInputElement>document.getElementById("changeBodyPart")).value = "0";
    }
  }

  IsInPage(node) {
    return (node === document.body) ? false : document.body.contains(node);
  }

  ClearAll(n,m) {
    var noComponents;
    if(m===2){
      noComponents = ["200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216"];
    }else if(m===7){
      noComponents = ["70", "71", "72", "73", "74", "75", "76", "771", "772", "781", "782", "791", "792"];
    }else if(m===5){
      noComponents = ["50", "51", "52", "53", "54", "55"];
    }else if(m===6){
      noComponents = ["60", "61", "62", "63", "64", "65"];
    }else if(m===3){
      noComponents = ["30", "31", "32", "33", "34", "35"];
    }
    else if(m===4){
      noComponents = ["40", "41", "42", "43", "44", "45"];
    }else if(m===1){
      noComponents = ["100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116"];
    }
    

    for(var i = 0; i < noComponents.length; i++) {
      if(n != noComponents[i]) {
        var element = document.getElementById("image" + noComponents[i]);
        //console.log(element.className.indexOf("noImage"));
        if(element.className.indexOf("noImage") <= -1) {//se esta mostrando
          element.className += element.className ? ' noImage' : 'noImage';
        }
      }
    }
  }

  ChangeToBlue() {
    var n = (<HTMLInputElement>document.getElementById("changeBodyPart")).value;
    console.log(n);//agregado por Richard
    if(n != '0') {
      var element = document.getElementById("image" + n);
      //esto es una prueba hecho por Richard
      console.log(element.className.indexOf("Blue"));
      //termina la prueba
      if(element.className.indexOf("Blue") <= -1) {//se esta mostrando
        element.className += (element.className ? ' ' : '') + (element.className + 'Blue');
        console.log('Entro aqui en blue');//Agregado por Richard
        console.log(element.className);//Agregado por Richard
      }
    }
  }

  ChangeToRed() {
    var n = (<HTMLInputElement>document.getElementById("changeBodyPart")).value;
    console.log(n);//agregado por Richard
    if(n != '0') {
      var element = document.getElementById("image" + n);
      //esto es una prueba hecho por Richard
      console.log(element.className.indexOf("Blue"));
      //termina la prueba
      if(element.className.indexOf("Blue") > -1) {//se esta mostrando
        var elClass = element.className.split(" ");
        element.className = elClass[0];
        console.log('Entro aqui en red');//Agregado por Richard
        console.log(element.className);//Agregado por Richard
      }
    }
  }

  GoBack(n) {
    var element = document.getElementById("componentBody"+n);
    element.className += element.className ? ' hiddenImage' : 'hiddenImage';
  }

  GoToBackBody() {
    var component = document.getElementById("componentBody0");
    component.className = component.className.replace(/\bhiddenImage\b/g, "").trim();
  }

  GetIdComponent(n){
    //console.log(element.id);
    //this.showAlert(element.id);
    for (let item of this.lista) {
      if(n===item.id){
        // console.log(item.title+' '+item.dbId);
        this.valueUpdate.emit(item);
      }
      
    }
  }

}
