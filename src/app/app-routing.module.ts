import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule) 
  },
  {
    path: 'experience',
    loadChildren: ()=>import('./experience/experience.module').then(m=>m.ExperienceModule)
  },
  {
    path:'formation',
    loadChildren: ()=>import('./formation/formation.module').then(m=>m.FormationModule)
  },
  {
    path:'contact',
    loadChildren:()=>import('./contact/contact.module').then(m=>m.ContactModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
