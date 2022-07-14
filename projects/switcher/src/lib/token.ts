import { InjectionToken } from "@angular/core";
import { SwitcherConfigI } from "./models/config.model";

export const CONFIG_TOKEN = new InjectionToken<SwitcherConfigI>('SwitcherModuleConfig')
