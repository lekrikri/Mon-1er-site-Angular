import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './commun/menu/menu.component';
import { UneComponent } from './home/une/une.component';
import { GrilleComponent } from './home/grille/grille.component';
import { LastArticleComponent } from './sidebar/last-article/last-article.component';
import { MapComponent } from './map/map.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

// Importer la classe
import { ArticlesService } from './services/articles.service';
// Mettre la classe dans le provider = fournisseur

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UneComponent,
    GrilleComponent,
    LastArticleComponent,
    MapComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
