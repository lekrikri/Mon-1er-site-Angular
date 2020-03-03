import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";

@Component({
  selector: 'app-grille',
  templateUrl: './grille.component.html',
  styleUrls: ['./grille.component.css']
})
export class GrilleComponent implements OnInit {

  articles;

  constructor(service : ArticlesService) {
    this.articles = service.getArticlesGrille();
   }

  ngOnInit(): void {
  }

}
