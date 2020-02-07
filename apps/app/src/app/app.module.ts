import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RoutingModule } from './routing.module';
// @ts-ignore
import { AuthModule } from '@app/auth';
import { DrinksComponent } from './drinks/drinks.component';
import { DrinksListComponent } from './drinks/drinks-list/drinks-list.component';
import { DrinkDetailsComponent } from './drinks/drink-details/drink-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [AppComponent, DrinksComponent, DrinksListComponent, DrinkDetailsComponent],
  imports: [AuthModule, BrowserModule, BrowserAnimationsModule, HttpClientModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, RoutingModule, MatInputModule, MatCardModule, MatListModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
// @ts-ignore
export class AppModule {}
