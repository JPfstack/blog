import { Component, OnInit } from '@angular/core';
import { ServicioBlogService } from '../../servicio-blog.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  nuevoPost: FormGroup;
  guardando: boolean;
  mensajeEnvio: boolean;


  constructor(private blogService: ServicioBlogService, private router: Router) {


    this.guardando = false;
    this.mensajeEnvio = false;


    this.nuevoPost = new FormGroup({
      titulo: new FormControl("", [Validators.required]),
      autor: new FormControl("", [Validators.required]),
      fecha: new FormControl("", []),
      categoria: new FormControl("", [Validators.required]),
      texto: new FormControl("", [Validators.required]),
      imagen: new FormControl("", [])
    })
  }

  ngOnInit(): void {
  }

  onSubmit(pNuevoPost, pRuta) {
    let postLocalStorage = pNuevoPost;
    let envioPost = this.nuevoPost.invalid;

    if (envioPost) {
      this.mensajeEnvio = true;
    } else {
      localStorage.setItem('postLocalStorage', JSON.stringify(postLocalStorage));
      this.guardando = true;
      this.blogService.agregarPost(pNuevoPost);
      setTimeout(() => {
        this.router.navigate([pRuta]);
      }, 5000)

    }


  }





}
