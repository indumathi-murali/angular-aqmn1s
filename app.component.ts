/**
 * Sample for Ranges
 */
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { CircularGaugeComponent } from '@syncfusion/ej2-angular-circulargauge';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  @ViewChild('range')
  public circulargauge: CircularGaugeComponent;

  public lineStyle: Object = {
    width: 10,
    color: 'transparent',
  };
  //Initializing LabelStyle

  // custom code end
  public majorTicks: Object = {
    height: 10,
    offset: 5,
  };
  public minorTicks: Object = {
    height: 0,
  };

  ngAfterViewInit(): void {}
  constructor() {
    //
  }
}
