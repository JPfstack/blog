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
  arrPostXCat: Post[];

  constructor(private blogService: ServicioBlogService) {
    this.arrPostXCat = new Array();
  }

  ngOnInit(): void {

    this.arrPost = this.blogService.getAllPost().reverse();
  }

  async onChangeCat($event) {
    if ($event.target.value === 'todas') {
      this.arrPost = await this.blogService.getAllPost();
    } else {
      this.arrPost = await this.blogService.getPostByCategoria($event.target.value);
    }

  }


}

