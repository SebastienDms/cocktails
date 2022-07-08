import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailContainerComponent } from './cocktail-container/cocktail-container.component';
import { CocktailDetailsComponent } from './cocktail-container/cocktail-details/cocktail-details.component';
import { CocktailListComponent } from './cocktail-container/cocktail-list/cocktail-list.component';
import { FormsModule } from '@angular/forms';
import { FruitComponent } from './fruit/fruit.component';
import { ElementGras } from './cocktail-container/Directives/gras.directive';

@NgModule({
  declarations: [
    AppComponent,
    ElementGras,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    FruitComponent,
    CocktailContainerComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
