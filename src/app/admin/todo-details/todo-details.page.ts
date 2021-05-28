import { Component, OnInit } from '@angular/core';
import { TaskI} from '../../models/task.interface';
import { TodoService } from '../../servicios/todo.service';
import { ActivatedRoute} from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})
export class TodoDetailsPage implements OnInit {
  todo: TaskI = {
    task: '',
    priority: 0,
    img: "",
    img2: "",
    category: "",
  };

  todoId= null;
  
  uploadPercent: Observable<number>;
  urlImage: Observable<string>;
  imagenGuardar;
  uploadPercent2: Observable<number>;
  urlImage2: Observable<string>;
  imagenGuardar2;
  constructor(private route: ActivatedRoute, private nav: NavController, private todoService: TodoService, private loadingController: LoadingController, private storage: AngularFireStorage) {}
  
  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId){
      this.loadTodo();
    }
  }

  async loadTodo(){
    const loading = await this.loadingController.create({
      message: 'Loading....'
    });
    await loading.present();

    this.todoService.getTodo(this.todoId).subscribe(todo => {
      loading.dismiss();;
      this.todo = todo;
    });
  }

  async saveTodo() {
    this.imagenGuardar = (<HTMLInputElement>document.getElementById('imagen')).value;
    this.todo.img = this.imagenGuardar;
    
    this.imagenGuardar2 = (<HTMLInputElement>document.getElementById('imagen2')).value;
    this.todo.img2 = this.imagenGuardar2;
    const loading = await this.loadingController.create({
      message: 'Saving....'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/dashboard');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.nav.navigateForward('/dashboard');
      });
    }
  }
  async onRemoveTodo(idTodo:string) {
    this.todoService.removeTodo(idTodo);
  }

  onUpload(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `uploads/portfolio_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage = ref.getDownloadURL())).subscribe();
  }
  onUpload2(e) {
    // console.log('subir', e.target.files[0]);
    const id = Math.random().toString(36).substring(2);
    const file = e.target.files[0];
    const filePath = `originales/portfolio_${id}`;
    const ref = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(finalize(() => this.urlImage2 = ref.getDownloadURL())).subscribe();
  }
}