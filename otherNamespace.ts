

///<reference path="CheckShape.ts">
namespace ShapeNamespace{

    export class Rect implements IShape {

        private name: string;
        constructor( name: string){
            this.name=name;
        }

        isCorrect(checkName: string): boolean{
            return checkName === this.name
        }

    }
}