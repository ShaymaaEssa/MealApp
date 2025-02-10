import { Routes } from '@angular/router';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MealsComponent } from './pages/meals/meals.component';
import { MealDetailsComponent } from './pages/meal-details/meal-details.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [

    {path:'', component:SidebarComponent,children:[
        {path:'', redirectTo:'category/all', pathMatch:'full'},
        {path:'category/:categoryName',component:HomeComponent ,title:'All meals'},
        {path:'mealdetails/:mealId',component:MealDetailsComponent ,title:'Meal Detail'},

    ]},
    
];
