import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { TreinadorComponent } from './treinador/treinador.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'treinador', component: TreinadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
