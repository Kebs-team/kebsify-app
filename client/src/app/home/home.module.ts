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



@NgModule({
  declarations: [
    HomepageComponent,
    RecentlyplayedComponent,
    WorkoutgenreComponent,
    SearchpageComponent,
    ProfileComponent,
    DialogOverviewExampleDialog 
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class HomeModule { }
