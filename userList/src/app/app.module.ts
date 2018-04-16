import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NewUserComponent } from './components/new-user/new-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { FilterPipe } from './pipes/filter.pipe';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './routes/app-routes/app.routes.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserDetailsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
