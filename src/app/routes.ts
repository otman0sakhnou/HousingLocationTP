import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
const routeConfig: Routes = [
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Home details'
  },{
    path: '',
    component: HomeComponent,
    title: 'Home page'
  }
];


export default routeConfig;

