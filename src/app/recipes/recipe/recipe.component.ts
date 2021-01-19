import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { emptyRecipe, IRecipe } from '../recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  public recipe: IRecipe = emptyRecipe;

  constructor( private route: ActivatedRoute, private recipeService: RecipeService ) { }

  ngOnInit(): void {
      const recipeId = this.route.snapshot.paramMap.get('id');
      this.recipe = this.recipeService.getRecipe(recipeId);
  }

}
