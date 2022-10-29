import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck {

  constructor() { }
 
  

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchanges");
  }
  ngDoCheck(): void {
    throw new Error('Method not implemented.');
  }

}
