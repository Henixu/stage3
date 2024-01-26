import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AuthGuard } from './guards/auth.guard'; 
const routes: Routes = [{path:'formulaire',component:FormulaireComponent, canActivate: [AuthGuard]},
  {path:'connexion',component:ConnexionComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
