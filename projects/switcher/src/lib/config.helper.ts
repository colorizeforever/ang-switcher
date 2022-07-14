import { SwitcherConfigI } from "./models/config.model";
import { defaultConfig } from "./constants/defaultConfig";

export const populateDefault = (config: Partial<SwitcherConfigI>): SwitcherConfigI => {
  const result = {...config}
  const defaultKeys = Object.keys(defaultConfig) as ( keyof SwitcherConfigI )[];
  defaultKeys
    .filter((key) => !result.hasOwnProperty(key))
    .forEach((key) => {
      result[key] = defaultConfig[key];
    });

  return result as SwitcherConfigI;
};
