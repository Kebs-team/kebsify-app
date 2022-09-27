import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../auth.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { RecentlyplayedComponent } from './pages/homepage/sections/recentlyplayed/recentlyplayed.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { SartistsComponent } from './pages/searchpage/sections/sartists/sartists.component';
import { SplaylistComponent } from './pages/searchpage/sections/splaylist/splaylist.component';
import { SsongsComponent } from './pages/searchpage/sections/ssongs/ssongs.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children : [
      {
        path: '',
        component:RecentlyplayedComponent,
      },
      {
        path : 'profile',
        component:ProfileComponent,
      },
      {
        path:'search',
        component:SearchpageComponent,
        children:[
          {
            path:'songs/:input',
            component:SsongsComponent,
          },{
            path: 'playlist/:input',
            component: SplaylistComponent,
          },
          {
            path: 'artist/:input',
            component: SartistsComponent,
          }
        ],
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
