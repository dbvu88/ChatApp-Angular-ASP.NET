import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// add angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { 
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
   
} from '@angular/material';

// add form module (2 way data binding)
import { FormsModule } from '@angular/forms';



// add components
import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component';
import { NewMessagesComponent } from './new-messages.component';

import { WebService } from './web.service'; // add web serivce
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent, 
    MessagesComponent,
    NewMessagesComponent
  ],
  imports: [
    HttpModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCardModule, 
    MatInputModule,
    MatSnackBarModule,
    FormsModule,     
    MatToolbarModule
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
