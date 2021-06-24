import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Output() menuButtonClick: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

  onClick() {
    this.menuButtonClick.emit();
  }

}
