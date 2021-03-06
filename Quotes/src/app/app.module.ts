import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { HighlightDirective } from './highlight.directive';
import { FormsModule} from '@angular/forms';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    FormComponent,
    DetailsComponent,
    HighlightDirective,
    DateCountPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
