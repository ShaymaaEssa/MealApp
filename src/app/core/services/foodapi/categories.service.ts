import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient:HttpClient){}

  getCategories():Observable<any>{
    return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/categories.php')
  }

  getMealsByCategory(category:string):Observable<any>{
    if(category ==="all"){
      return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/search.php?s');
      
    }
    else {
      return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      
    }
  }
}
