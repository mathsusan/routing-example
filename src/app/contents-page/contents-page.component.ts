import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-contents-page',
  templateUrl: './contents-page.component.html',
  styleUrls: ['./contents-page.component.scss']
})
export class ContentsPageComponent  {
  public recipes;

  constructor(private recipeService: RecipeService) { 
    this.recipes = recipeService.recipes;
  }

}
