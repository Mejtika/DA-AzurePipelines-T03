import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToDoListViewComponent } from './to-do-list-view/to-do-list-view.component';
import { ToDoItemsDataSourceService } from './to-do-items-data-source.service';
import { FormsModule }  from '@angular/forms';
import { ToDoItemsDataSourceFakeService } from './to-do-items-data-source-fake.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToDoItemsDataSourceRealService } from './to-do-items-data-source-real.service';
import { ToDoItemsDataSourceServiceFactory } from './to-do-items-data-source.service.factory';
import { EnvConfigService } from '../env-config.service';

@NgModule({
  declarations: [
    ToDoListViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  
    BrowserModule,
    HttpClientModule,

  ],
  exports: [
    ToDoListViewComponent
  ],
  providers: [
    {
      provide: ToDoItemsDataSourceService,
      useFactory: ToDoItemsDataSourceServiceFactory,
      deps: [EnvConfigService, HttpClient]
    }
  ]
})
export class ToDoModule { }
