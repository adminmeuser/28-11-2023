import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { PersonalDetailsComponent } from './personal-details/personal-details.component';
// import { OfficialDetailsComponent } from './official-details/official-details.component';
// import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    // PersonalDetailsComponent,
    // OfficialDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
