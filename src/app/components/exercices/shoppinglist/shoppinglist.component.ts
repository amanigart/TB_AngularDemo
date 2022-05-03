import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article.model';
import { ShoppinglistService } from '../shoppinglist.service';

@Component({
  providers: [ShoppinglistService],
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})

export class ShoppinglistComponent implements OnInit {
  articles! : Article[];
  newArticle! : string;

  constructor(private _service: ShoppinglistService) {}

  ngOnInit(): void {
    this.articles = this._service.articles;
  }


  addArticle() : void {
    this._service.addArticle(this.newArticle);
    this.newArticle = '';
  }

  deleteArticle(article : string) : void {
    this._service.deleteArticle(article);
  }

  plusOneItem(article: Article) : void {
    this._service.plusOneArticle(article);
  }

  minusOneItem(article: Article): void {
    this._service.minusOneArticle(article);
  }
}
