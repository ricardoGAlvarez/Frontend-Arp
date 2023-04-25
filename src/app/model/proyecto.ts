export class Proyecto {
    id?: number;
    nombre: string;
    descripcion: string;
    img:string

    constructor( id: number,nombre:string, descripcion:string, img: string){
        this.id=id;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.img=img;
    }
}
