import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { DatasharingService } from './services/datasharing.service';
import { TableeditComponent } from './tableedit/tableedit.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ModalService,DatasharingService],
  entryComponents:[ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
