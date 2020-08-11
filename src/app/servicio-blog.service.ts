import { Injectable, resolveForwardRef } from '@angular/core';
import { Post } from '../app/models/post.models'

@Injectable({
  providedIn: 'root'
})
export class ServicioBlogService {

  arrPost: Post[];

  constructor() {
    this.arrPost = [
      new Post('Los peces tropicales', 'lorem ipsun....', 'JP', 'akjdksajd', '12/08/2020', 'peces tropicales'),
      new Post('Acuarios de agua caliente', 'lorem ipsun....', 'JP', 'akjdksajd', '12/08/2020', 'peces agua caliente'),
      new Post('Acuarios de agua fría', 'lorem ipsun....', 'JP', 'akjdksajd', '12/08/2020', 'peces agua fria'),
      new Post('Pez Betta macho', 'lorem ipsun....', 'JP', 'akjdksajd', '12/08/2020', 'pez betta')
    ]

  };

  getAllPost() {
    return this.arrPost;
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
      this.arrPost.push(pNuevoPost);
      resolve(this.arrPost)
    })

  }

}
