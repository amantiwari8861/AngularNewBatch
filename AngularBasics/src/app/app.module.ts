import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent1 } from './mycomponent/MyComponent';
import { StructuralDirectivesComponent } from './structural_directives/structural_directives.component';
import { TemplatesTutorialComponent } from './templates-tutorial/templates-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplatesTutorialComponent,
    MyComponent1,
    StructuralDirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
