import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { QueryComponent } from './components/query/query.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemComponent } from './components/item/item.component';
import { FloatButtonComponent } from './components/float-button/float-button.component';
import { ModalComponent } from './components/modal/modal.component';


//NGRX
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from '../environments/environment.prod';
import { AddItemComponent } from './components/add-item/add-item.component';
import { HttpClientModule } from '@angular/common/http';
import { appReducers } from './app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent,
    QueryComponent,
    NotFoundComponent,
    ItemComponent,
    FloatButtonComponent,
    ModalComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
