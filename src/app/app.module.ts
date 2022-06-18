import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

import { PasswordModule } from "primeng/password";
import { DividerModule } from "primeng/divider";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PasswordModule,
    DividerModule,
    FormsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
