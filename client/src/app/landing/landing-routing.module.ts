import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent
  },
  {
    path: 'register',
    loadChildren: () => import('../register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
