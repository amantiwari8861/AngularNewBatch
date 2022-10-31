import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, JsonPipeComponent } from './app.component';
import { ChildcompComponent } from './childtoparent/childcomp/childcomp.component';
import { ChildtoparentComponent } from './childtoparent/childtoparent.component';
import { TestHooksComponent } from './test-hooks/test-hooks.component';
import { ChildComponent } from './test-hooks/child/child.component';
import { FormsModule } from '@angular/forms';
import { TimerParentComponent } from './timer-parent/timer-parent.component';
import { TimerComponent } from './timer-parent/timer/timer.component';
import { BootstrapFormDemoComponent } from './bootstrap-form-demo/bootstrap-form-demo.component';

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
    BootstrapFormDemoComponent
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
