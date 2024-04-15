import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatComponent } from './component/creat/creat.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';
import { GetAllComponent } from './component/get-all/get-all.component';
import { GetByIdComponent } from './component/get-by-id/get-by-id.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    CreatComponent,
    UpdateComponent,
    DeleteComponent,
    GetAllComponent,
    GetByIdComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
