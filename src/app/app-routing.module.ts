import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './componentes/blog/blog.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'blog' },
  { path: 'blog', component: BlogComponent },
  { path: 'new', component: FormularioComponent },
  { path: '**', redirectTo: 'blog' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
