import { Component, inject, PLATFORM_ID } from '@angular/core';
import { CategoriesService } from '../../core/services/foodapi/categories.service';
import { Subscription } from 'rxjs';
import { ICategory } from '../../shared/interfaces/icategory';
import { isPlatformBrowser } from '@angular/common';
import { IMeal } from '../../shared/interfaces/imeal';
import { ActivatedRoute, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private readonly categoriesService = inject(CategoriesService); //readonly so no one edit it
  subCategories:Subscription = new Subscription();
  subMeals:Subscription = new Subscription();
  categoriesArr:ICategory[] = []; 
  mealsArr:IMeal[] = []; 

  private readonly ID = inject( PLATFORM_ID) ;

  private readonly activateRoute = inject(ActivatedRoute); //readonly so no one edit it


  ngOnInit():void {
    if(isPlatformBrowser(this.ID)){
      this.subCategories = this.categoriesService.getCategories().subscribe({
        next:(res)=>{
          console.log(res.categories)
          this.categoriesArr = res.categories;
          },
          error:(err)=>{
            console.log(err)
          },
          complete:()=>{}
      })

      // this.getMeals('all');

      this.activateRoute.paramMap.subscribe((params)=>{
        const catName = params.get('categoryName');
        if(catName ){
          this.getMeals(catName);
        }
        console.log(catName);
        

      })
    }
    
  }
  
  ngOnDestroy():void {
    this.subCategories.unsubscribe()
  }

  getMeals(category:string):void{
    this.subMeals = this.categoriesService.getMealsByCategory(category).subscribe({
      next:(res)=>{
        console.log(res.meals)
        this.mealsArr = res.meals;
        },
        error:(err)=>{
          console.log(err)
        },
        complete:()=>{}
    });
  }

}
