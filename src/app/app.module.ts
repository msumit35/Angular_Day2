import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { GalleryService } from './service/gallery.service';
import { HttpModule } from '@angular/http';
import { Task3Component } from './task3/task3.component';
// import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule,
    RouterModule.forRoot([
      { path: '', component: Task1Component },
      { path: 'task2', component: Task2Component },
      { path: 'task3', component: Task3Component }
    ])
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
