import { Injectable } from '@angular/core';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root'
})

export class ShoppinglistService {
  articles! : Article[];
  currentArticle! : Article;

  constructor() {
    this.articles = [
      { name: "pizza", quantity: 2},
      { name: "oeufs", quantity: 6},
      { name: "oreo", quantity: 4}
    ];
   }

  addArticle(article : string): Article[] {
    let index = this.articles.findIndex(a => { return a.name.toLowerCase() === article.toLowerCase() });
    this.currentArticle = new Article;
    this.currentArticle.name = article.toLowerCase();
    this.currentArticle.quantity = 1;

    if (index !== -1) {
      this.plusOneArticle(this.currentArticle);
      return this.articles;
    }

    this.articles.push(this.currentArticle);
    return this.articles;
  }

  addNewArticleToList(article : string) : Article[] {

    return this.articles;
  }

  deleteArticle(article : string): Article[] {
    let index = this.articles.findIndex(a => { return a.name === article });
    this.articles.splice(index, 1);

    return this.articles;
  }

  plusOneArticle(article: Article): Article[] {
    let index = this.articles.findIndex(a => { return a.name === article.name });
    this.articles[index].quantity++;

    return this.articles;
  }

  minusOneArticle(article: Article): Article[] {
    let index = this.articles.findIndex(a => {return a.name == article.name });

    switch (this.articles[index].quantity)
    {
      case 1:
        this.articles = this.deleteArticle(article.name);
        break;
      default:
        this.articles[index].quantity--;
        break;
    }
    return this.articles;
  }
}
