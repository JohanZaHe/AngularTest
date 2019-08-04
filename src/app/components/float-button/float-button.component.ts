import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-float-button',
  templateUrl: './float-button.component.html',
  styleUrls: ['./float-button.component.css']
})
export class FloatButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.startElement();
  }

  startElement(){
    $('.fixed-action-btn').floatingActionButton();
  }

}
