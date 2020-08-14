import { Component, OnInit } from '@angular/core';
import { ServicioBlogService } from '../../servicio-blog.service';
import { Post } from '../../models/post.models'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];
  leerMas: boolean;
  leerMenos: boolean;
  postLocalStorage: Post;




  constructor(private blogService: ServicioBlogService) {

    this.leerMas = true;
    this.leerMenos = false;

  }

  ngOnInit(): void {
    this.arrPost = this.blogService.getAllPost();
    console.log(this.postLocalStorage);
  }

  async onChangeCat($event) {
    if ($event.target.value === 'todas') {
      this.arrPost = await this.blogService.getAllPost();
    } else {
      this.arrPost = await this.blogService.getPostByCategoria($event.target.value);
    }

  }

  onLeerMas() {
    if (this.leerMas) {
      this.leerMas = false;
      this.leerMenos = true;
    } else {
      this.leerMas = true;
      this.leerMenos = false;
    }
  }



}




