import {populateDefault} from "./config.helper";
import { defaultConfig } from "./constants/defaultConfig";

describe('populateDefault', () => {
  const {sliderUnChecked, backgroundColor} = defaultConfig
  const testConfig = {
    sliderChecked: '#01880f',
    sliderUnChecked: '#ff36fc',
  }

  it('Without colors', () => {
    expect(populateDefault({})).toEqual(defaultConfig)
  });

  it('With two colors', () => {
    const expectedConfig = {
      sliderChecked: '#01880f',
      sliderUnChecked: '#ff36fc',
      backgroundColor
    }
    expect(populateDefault(testConfig)).toEqual(expectedConfig)
  });

  it('With one color', () => {
    const expectedConfig = {
      sliderChecked: '#01880f',
      sliderUnChecked,
      backgroundColor
    }
    expect(populateDefault({sliderChecked: testConfig.sliderChecked})).toEqual(expectedConfig)
  })

})
