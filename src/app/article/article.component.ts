import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  // titreArticle: string = "Titre de l'article";
  // prixArticle: number = 12
  textAltImage: string = "Titre alternative de l'image"
  urlImg: string = "http://via.placeholder.com/400x250"
  totalNbrLike: number = 0;
  comment: string = " ";
  @Input() titreArticle!: string;
  @Input() prixArticle!: number;
  @Output() info = new EventEmitter<string>();

  constructor() {
  }
  onLike (){
    this.totalNbrLike++;
    this.info.emit(this.titreArticle)
  }

}
