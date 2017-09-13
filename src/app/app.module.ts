import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { ContentComponent } from './content/content.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    ContentComponent,
    FootComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
