import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardData = {
    name: 'Test Card',
    title: '',
    description: '',
    image: '',
    link: '',
  }
  constructor() { }

  ngOnInit(): void {
  }

  cardClick() {
    console.log('Card clicked');
    console.log('Card data:', this.cardData);
    // Push out the card from the wallet animation

  }

}
