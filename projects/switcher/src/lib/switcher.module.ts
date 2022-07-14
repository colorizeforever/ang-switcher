import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { SwitcherComponent } from './switcher/switcher.component';

import { CommonModule } from '@angular/common'
import { BrowserModule } from "@angular/platform-browser";
import { SwitcherConfigI } from "./models/config.model";
import { ReactiveFormsModule } from "@angular/forms";
import { populateDefault } from "./config.helper";
import { CONFIG_TOKEN } from "./token";


@NgModule({
  declarations: [
    SwitcherComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [
    SwitcherComponent
  ],
})
export class SwitcherModule {
  static forRoot(config: Partial<SwitcherConfigI>): ModuleWithProviders<SwitcherModule> {
    return {
      ngModule: SwitcherModule,
      providers: [{
        provide: CONFIG_TOKEN,
        useValue: populateDefault(config)
      }]
    }
  }
}
