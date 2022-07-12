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
import { IfDirective } from './cocktail-container/Directives/if.directive';
import { AddAlimentComponent } from './aliment/add-aliment/add-aliment.component';
import { ListAlimentComponent } from './aliment/list-aliment/list-aliment.component';
import { AlimentService } from './aliment/aliment.service';

@NgModule({
  declarations: [
    AppComponent,
    ElementGras,
    HeaderComponent,
    CocktailListComponent,
    CocktailDetailsComponent,
    FruitComponent,
    CocktailContainerComponent,
    IfDirective,
    AddAlimentComponent,
    ListAlimentComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AlimentService], //singleton
  bootstrap: [AppComponent],
})
export class AppModule {}
