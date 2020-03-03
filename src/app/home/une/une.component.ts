import { Component } from '@angular/core';
import { ArticlesService } from "../../services/articles.service"

@Component({
  selector: 'app-une',
  templateUrl: './une.component.html',
  styleUrls: ['./une.component.css']
})
export class UneComponent  {
  titre;
  contenu;
  images;

  constructor( service : ArticlesService) {
    this.titre = service.getArticleUne().titre;
    this.contenu = service.getArticleUne().contenu;
    this.images = service.getArticleUne().urlImg;
   }

  
}
