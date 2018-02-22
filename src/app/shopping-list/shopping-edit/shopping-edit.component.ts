import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInout') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInpuRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const name: string = this.nameInputRef.nativeElement.value;
    const amount: number = this.amountInpuRef.nativeElement.value;

    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
