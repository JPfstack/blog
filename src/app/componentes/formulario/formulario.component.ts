import { Component, OnInit } from '@angular/core';
import { ServicioBlogService } from '../../servicio-blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  guardando: boolean;

  constructor(private blogService: ServicioBlogService, private router: Router) {
    this.guardando = false;
  }

  ngOnInit(): void {
  }

  onSubmit(pNuevoPost, pRuta) {
    this.guardando = true;
    this.blogService.agregarPost(pNuevoPost);
    setTimeout(() => {
      this.router.navigate([pRuta]);
    }, 2000)

  }


}
