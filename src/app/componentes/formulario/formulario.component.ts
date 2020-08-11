import { Component, OnInit } from '@angular/core';
import { ServicioBlogService } from '../../servicio-blog.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private blogService: ServicioBlogService) { }

  ngOnInit(): void {
  }

  onSubmit(pNuevoPost) {
    this.blogService.agregarPost(pNuevoPost)
  }

}
