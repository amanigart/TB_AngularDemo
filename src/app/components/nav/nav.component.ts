import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/link.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien! : Link[]
  constructor() { }

  ngOnInit(): void {
    this.listeLien = [
      {title : "Home", url : "home"},
      {title : "About", url : "about"},
      {title : "Demos", children : [
        {title : "Propriétés", url : "demo/demo1"},
        {title : "Bindings", url : "demo/demo2"},
        {title : "Pipes", url : "demo/demo3"},
        {title : "Directives", url : "demo/demo4"}]},
      {title : "Exercices", children : [
        {title : "Chronomètre", url : "exercices/exo1"},
        {title : "Shopping list", url : "exercices/shoppinglist"},
        {title : "Forms (step 1)", url : "exercices/forms"},
        {title : "CRUD", url : "exercices/crud"}
      ]}
    ]
  }

  displaySubLinks(link : Link) : void {
    (link.isChildrenVisible) ? link.isChildrenVisible = false : link.isChildrenVisible = true;
  }

}
