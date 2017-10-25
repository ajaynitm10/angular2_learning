import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { UserComponent } from './user-component/user-component';
import { BasichighlightDirective } from './basichighlight.directive';
import { BetterhighlightDirective } from './better-highlight/betterhighlight.directive';
import { HomeComponent } from './home-component/home/home.component';
import { LoggingService } from './logging-service/logging.service';
import { AppRoutingModule } from './app-routing.module';
import { LOCALE_PROVIDERS, LocaleService, LocalePipe } from './locale/index';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BasichighlightDirective,
    BetterhighlightDirective,
    HomeComponent,
    LocalePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LoggingService, LOCALE_PROVIDERS, LocaleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
