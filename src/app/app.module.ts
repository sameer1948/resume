import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Import MatCardModule
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatCardModule,
    MatChipsModule,
    MatDividerModule, 
    MatGridListModule, 
    MatListModule,
    MatIconModule,         // Add this line
    BrowserAnimationsModule  // Make sure you also have this for Angular Material animations
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
