export class Item{
    public id: number;
    public fecha: string;
    public origen: string;
    public destino: string;
    public cantidad: number;
    public estado: string;
    public favorito: boolean;
    public sale: boolean;
    public precio : number;

    constructor(origen:string, destino:string, cantidad: number, precio: number, favorito: boolean, sale: boolean){
        this.origen = origen;
        this.destino = destino;
        this.cantidad = cantidad;
        this.precio = precio;
        this.favorito = favorito;
        this.sale = sale;
        this.estado = "Catalogado";
        
        this.id = Math.random();
        this.fecha = new Date().toDateString();
    }
}