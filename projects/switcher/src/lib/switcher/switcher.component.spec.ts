import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { SwitcherComponent } from './switcher.component';
import { SwitcherModule } from "../switcher.module";
import { CommonModule } from "@angular/common";
import { BrowserModule, By } from "@angular/platform-browser";

describe('SwitcherComponent', () => {
  let component: SwitcherComponent;
  let fixture: ComponentFixture<SwitcherComponent>;
  const mockDefaultColors = {
    sliderChecked: 'rgb(1, 136, 15)',
    sliderUnChecked: 'rgb(172, 17, 17)',
    backgroundColor: 'rgb(255,255,255)',
  }
  let toggler: { click: () => void; };
  let label: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        BrowserModule,
        SwitcherModule.forRoot(mockDefaultColors),
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitcherComponent);
    component = fixture.componentInstance;
    fixture.autoDetectChanges();
    toggler = fixture.debugElement.nativeElement.querySelector('.toggle-button-cover');
    label = fixture.debugElement.nativeElement.querySelector('.checkmark');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('On click', () => {
    describe('When enabled', () => {
      it('Should change checked variable value on click', fakeAsync(() => {
        spyOn(component, 'onChange');
        spyOn(component, 'onTouch')
        toggler.click();
        tick();
        expect(component.checked).toBeTruthy();
        expect(component.onChange).toHaveBeenCalledWith(component.checked);
        expect(component.onTouch).toHaveBeenCalled();
      }));
      it('Should check colors', fakeAsync(() => {
        expect(label.style.backgroundColor).toEqual(mockDefaultColors.sliderUnChecked);
        toggler.click();
        fixture.detectChanges();
        expect(label.style.backgroundColor).toEqual(mockDefaultColors.sliderChecked)
      }));
    });
    describe('When disabled', () => {
      it('Should not change color', () => {
        component.disabled = true;
        toggler.click()
        fixture.detectChanges()
        expect(label.style.backgroundColor).toEqual(mockDefaultColors.sliderUnChecked)
      })
    })
  })
});
