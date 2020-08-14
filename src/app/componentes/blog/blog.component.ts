import { Component, OnInit } from '@angular/core';
import { ServicioBlogService } from '../../servicio-blog.service';
import { Post } from '../../models/post.models'
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPost: Post[];
  arrPostXCat: Post[];
  leerMas: boolean;
  leerMenos: boolean;




  constructor(private blogService: ServicioBlogService) {
    this.arrPostXCat = new Array();
    this.leerMas = true;
    this.leerMenos = false;


  }

  ngOnInit(): void {

    this.arrPost = this.blogService.getAllPost();
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




