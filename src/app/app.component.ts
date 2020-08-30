import { Component } from '@angular/core';
import { stationList } from './station-list.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  /**
   * 所有列車到站站名之資料
   *
   * @memberof AppComponent
   */
  list = stationList;

}
