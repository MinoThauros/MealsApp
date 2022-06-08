class GridInput {
      readonly title:string;
      readonly color:string;
      readonly onPress:any;
      //readonly so that properties cannot be assigned outside of constructor
      constructor(title:string,color:string,onPress:any){
          this.color=color;
          this.title=title;
          this.onPress=onPress;
      }
      
}
export default GridInput;