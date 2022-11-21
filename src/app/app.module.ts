import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketlistComponent } from './components/rocketlist/rocketlist.component';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RocketService } from './services/rocket.service';
import { RocketComponent } from './components/rocket/rocket.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    RocketlistComponent,
    ManageComponent,
    RocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutes
  ],
  providers: [RocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
