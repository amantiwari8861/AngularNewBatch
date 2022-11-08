import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, JsonPipeComponent } from './app.component';
import { ChildcompComponent } from './childtoparent/childcomp/childcomp.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { TestHooksComponent } from './test-hooks/test-hooks.component';
import { ChildComponent } from './test-hooks/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerParentComponent } from './timer-parent/timer-parent.component';
import { TimerComponent } from './timer-parent/timer/timer.component';
import { BootstrapFormDemoComponent } from './bootstrap-form-demo/bootstrap-form-demo.component';
import { TempFormComponent } from './temp-form/temp-form.component';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildtoparentComponent,
    ChildcompComponent,
    TestHooksComponent,
    ChildComponent,
    JsonPipeComponent,
    TimerParentComponent,
    TimerComponent,
    BootstrapFormDemoComponent,
    TempFormComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
