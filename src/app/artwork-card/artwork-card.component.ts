import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artwork-card',
  templateUrl: './artwork-card.component.html',
  styleUrls: ['./artwork-card.component.css']
})
export class ArtworkCardComponent implements OnInit {
  @Input() artwork!: {
    image: string,
    description: string,
    category: string,
  };

  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }
}
