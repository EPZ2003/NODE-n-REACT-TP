import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'tp3';
  constructor(){
    console.log('AppComponent.constructror');
  }
  ngOnInit(): void {
    console.log("AppCompnent.ngOnInit()")
  }
}
