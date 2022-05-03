import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-displaylist',
  templateUrl: './displaylist.component.html',
  styleUrls: ['./displaylist.component.scss']
})
export class DisplaylistComponent implements OnInit {
  @Input() listeArticles! : Article[];
  @Output() msgEvent : EventEmitter<string> = new EventEmitter<string>();
  @Output() plusOneEvent: EventEmitter<Article> = new EventEmitter<Article>();
  @Output() minusOneEvent: EventEmitter<Article> = new EventEmitter<Article>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteArticle(article : string) {
    this.msgEvent.next(article);
  }

  plusOneItem(article: Article) {
    this.plusOneEvent.next(article);
  }

  minusOneItem(article: Article) {
    this.minusOneEvent.next(article);
  }

  sortByQuantity(): Article[] {
    return this.listeArticles.sort((a: Article, b: Article) =>  (a.quantity -1) < b.quantity ? 1 : -1);
  }
}
