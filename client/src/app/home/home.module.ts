import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MaterialModule } from '../material.module';
import { RecentlyplayedComponent } from './pages/homepage/sections/recentlyplayed/recentlyplayed.component';
import { WorkoutgenreComponent } from './pages/homepage/sections/workoutgenre/workoutgenre.component';
import { SearchpageComponent } from './pages/searchpage/searchpage.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { DialogOverviewExampleDialog } from './pages/homepage/sections/Dialogue/createplaylist.component';
import { SplaylistComponent } from './pages/searchpage/sections/splaylist/splaylist.component';
import { SartistsComponent } from './pages/searchpage/sections/sartists/sartists.component';
import { SsongsComponent } from './pages/searchpage/sections/ssongs/ssongs.component';
import { SalbumsComponent } from './pages/searchpage/sections/salbums/salbums.component';
import { UrlPipe } from '../security.pipe';
import { HomeService } from './pages/home.service';



@NgModule({
  declarations: [
    HomepageComponent,
    RecentlyplayedComponent,
    WorkoutgenreComponent,
    SearchpageComponent,
    ProfileComponent,
    DialogOverviewExampleDialog,
    SplaylistComponent,
    SartistsComponent,
    SsongsComponent,
    SalbumsComponent ,
    UrlPipe
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
