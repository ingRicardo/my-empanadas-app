import { Component } from '@angular/core';
import {GenerateOrder } from '../generate-order/generate-order';
@Component({
  selector: 'app-home',
  imports: [GenerateOrder],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
