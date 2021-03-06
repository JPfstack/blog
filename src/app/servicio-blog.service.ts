import { Injectable, resolveForwardRef } from '@angular/core';
import { Post } from '../app/models/post.models'

@Injectable({
  providedIn: 'root'
})
export class ServicioBlogService {

  arrPost: Post[];
  postLocalStorage: Post;


  constructor() {
    this.getLocalStorage();



    this.arrPost = [

      new Post('Pez Betta', 'El Betta Splendens, también conocido como Luchador de Siam o simplemente pez Betta, es seguramente el pez tropical asiático más famoso del mundo. Sin ninguna duda su espectacular pose, preciosas aletas y diversidad de colores le han convertido en uno de los peces asiáticos más demandados. También su relativa facilidad de cuidados, donde le incluimos en la entrada Peces de agua caliente para principiantes, han hecho que aumente su popularidad.', 'https://www.pecestropicales.club/wp-content/uploads/2020/04/betta-2-1524462-640x480-1.jpg', 'JP', '17/08/2020', 'Pez Betta', 'https://www.pecestropicales.club/biotopo/peces-asiaticos/pez-betta/'),
      new Post('Acuarios de agua fría', 'Los peces de agua fría son, dentro de los peces de agua dulce, la otra opción de la que disponemos para montar nuestro acuario comunitario. Si bien cuenta con algunas particularidades respecto a los peces tropicales.Las ventajas de decantarse por peces de agua fría en mi opinión son varias, por un lado, suelen ser peces bastante resistentes por lo que podrían adaptarse bien a cualquier principiante en la acuariofilia.', 'https://www.pecestropicales.club/wp-content/uploads/2020/04/goldfish.jpg', 'JP', '17/08/2020', 'Peces agua fria', 'https://www.pecestropicales.club/biotopo/peces-agua-fria/'),
      new Post('Decoración del acuario', 'La decoración de acuarios es todo un arte y la estética que resulte dependerá en buena medida de nuestro gusto y creatividad. No obstante será necesario conocer ciertas pautas básicas para que nuestro acuario quede lo más estético posible y, especialmente, que nuestros peces tropicales se encuentren como en casa. Para ello será necesario realizar una mínima planificación previa de como queremos que quede nuestro acuario así como seguir unos consejos básicos para hacer las cosas bien desde el principio.', 'https://www.pecestropicales.club/wp-content/uploads/2020/05/decoracion-acuario-1536x1152.jpg', 'JP', '17/08/2020', 'Decoracion', 'https://www.pecestropicales.club/equipo-para-acuario/decoracion-acuarios/'),
      new Post('La química del agua', 'Un apartado básico para todo amante de la acuariofilia es conocer y entender la química del agua del acuario y sus parámetros fundamentales, en esta página intentaré explicar los conceptos básicos necesarios para su comprensión de la forma más fácil y práctica. Sé que es la peor parte y la más aburrida de la acuariofilia, pero es un pequeño precio que debemos pagar a cambio de contar con la fantástica compañía de amigos como ellos.', 'https://www.pecestropicales.club/wp-content/uploads/2020/01/ciclo-del-nitrogeno-1536x864.png', 'JP', '17/08/2020', 'Quimica del agua', 'https://www.pecestropicales.club/parametros-agua-acuario/')



    ]

  };

  getAllPost() {
    if (this.postLocalStorage == null) {
      return this.arrPost;
    } else {
      this.arrPost.unshift(this.postLocalStorage);
      return this.arrPost;
    }


  }

  getPostByCategoria(pCategoria): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrPost.filter(post => {
        return post.categoria === pCategoria;
      }))
    })
  }

  agregarPost(pNuevoPost): Promise<Post[]> {
    return new Promise((resolve, reject) => {
      this.arrPost;
      this.arrPost.unshift(pNuevoPost);
      resolve(this.arrPost)
    })

  }

  getLocalStorage() {
    this.postLocalStorage = JSON.parse(localStorage.getItem('postLocalStorage'));
    console.log(this.postLocalStorage);


  }

}
