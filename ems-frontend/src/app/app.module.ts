import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpAddComponent } from './emp-component/emp-add/emp-add.component';
import { EmpUpdateComponent } from './emp-component/emp-update/emp-update.component';
import { EmpDetailsComponent } from './emp-component/emp-details/emp-details.component';
import { EmpListComponent } from './emp-component/emp-list/emp-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    // EmpUpdateComponent,
    // EmpDetailsComponent,
    // EmpListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,MatIconModule,MatListModule,MatFormFieldModule,MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
