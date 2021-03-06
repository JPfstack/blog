export class Post {

    titulo: string;
    texto: string;
    imagen: string;
    autor: string;
    fecha: string;
    categoria: string;
    url: string;

    constructor(pTitulo: string, pTexto: string, pImagen: string, pAutor: string, pFecha: string, pCategoria: string, pUrl: string) {

        this.titulo = pTitulo;
        this.texto = pTexto;
        this.imagen = pImagen;
        this.autor = pAutor;
        this.fecha = pFecha;
        this.categoria = pCategoria;
        this.url = pUrl;
    }
}