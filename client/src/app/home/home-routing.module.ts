import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RecentlyplayedComponent } from './pages/homepage/sections/recentlyplayed/recentlyplayed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // canActivate : [AuthGuardService]
    children : [
      {
        path: '',
        component:RecentlyplayedComponent
      },
      {
        path:'search',
        component:SearchpageComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
