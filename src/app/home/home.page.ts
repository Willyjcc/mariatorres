import { Component, OnInit, HostListener } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { TodoService } from '../servicios/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos: TaskI[];
  todosBranding = [];
  todosWeb = [];
  todosApp = [];
  todosRedes = [];
  todosOtros = [];

  constructor(private todoService: TodoService) {}
  ngOnInit(){
    this.todoService.getTodos().subscribe((todos) =>{
      // console.log('Todoss', todos);
      this.todos = todos;
      for(let todosCategory of this.todos){
        if(todosCategory.category == "branding"){
          this.todosBranding.push(todosCategory);
        }
        if(todosCategory.category == "web"){
          this.todosWeb.push(todosCategory);
        }
        if(todosCategory.category == "app"){
          this.todosApp.push(todosCategory);
        }
        if(todosCategory.category == "redes"){
          this.todosRedes.push(todosCategory);
        }
        if(todosCategory.category == "otros"){
          this.todosOtros.push(todosCategory);
        }
      }
    })
  }
  scrollTo(section) {
    document.querySelector('#' + section)
    .scrollIntoView({behavior:"smooth"});
  }
  scrollTo2() {
    document.querySelector('#icons-yo')
    .scrollIntoView({behavior:"smooth"});
  }
  @HostListener("ionScroll", [])
  onWindowScroll() {
    let shand = document.getElementsByClassName('sticky') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.background = "#00557747";
      shand[0].style.height = "100px";
    }
  }

  contactarws(){
    var ws_msg = "https://wa.me/584245741374?text=Estoy%20interesado%20en%20tu%20trabajo.";
    window.open(ws_msg,'_system', 'location=yes')
  }

  portfolio(){
    let shand1 = document.getElementsByClassName('branding') as HTMLCollectionOf<HTMLElement>;
    if (shand1.length != 0) {
      shand1[0].style.display = "none";
    }
    let shand2 = document.getElementsByClassName('web') as HTMLCollectionOf<HTMLElement>;
    if (shand2.length != 0) {
      shand2[0].style.display = "none";
    }
    let shand3 = document.getElementsByClassName('app') as HTMLCollectionOf<HTMLElement>;
    if (shand3.length != 0) {
      shand3[0].style.display = "none";
    }
    let shand4 = document.getElementsByClassName('redes') as HTMLCollectionOf<HTMLElement>;
    if (shand4.length != 0) {
      shand4[0].style.display = "none";
    }
    let shand5 = document.getElementsByClassName('otros') as HTMLCollectionOf<HTMLElement>;
    if (shand5.length != 0) {
      shand5[0].style.display = "none";
    }
  }
  branding() {
    this.portfolio();
    let shand = document.getElementsByClassName('branding') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.display = "initial";
    }
  }
  web() {
    this.portfolio();
    let shand = document.getElementsByClassName('web') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.display = "initial";
    }
  }
  app() {
    this.portfolio();
    let shand = document.getElementsByClassName('app') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.display = "initial";
    }
  }
  redes() {
    this.portfolio();
    let shand = document.getElementsByClassName('redes') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.display = "initial";
    }
  }
  otros() {
    this.portfolio();
    let shand = document.getElementsByClassName('otros') as HTMLCollectionOf<HTMLElement>;
    if (shand.length != 0) {
      shand[0].style.display = "initial";
    }
  }



}
