export class GridInput {
      readonly title:string;
      readonly color:string;
      //readonly so that properties cannot be assigned outside of constructor
      constructor(title:string,color:string){
          this.color=color;
          this.title=title;
      }
      
}