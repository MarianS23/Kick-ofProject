import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxsModule } from '@ngxs/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/modules/shared.module';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { EditComponent } from './components/edit/edit.component';
import { HeaderComponent } from './components/static-components/header/header.component';
import { FooterComponent } from './components/static-components/footer/footer.component';


import { UserState } from './state/user.state';
import { DatePipe } from '@angular/common';
import { HomeModule } from './components/home/home.module';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EditComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxsModule.forRoot([UserState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    FlexLayoutModule,
    HomeModule
  ],
  
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
