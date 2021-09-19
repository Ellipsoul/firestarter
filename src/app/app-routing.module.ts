import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components to be routed
import { HomePageComponent } from './home-page/home-page.component';

// Connect different routes to components here!
const routes: Routes = [
  { path: '', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
