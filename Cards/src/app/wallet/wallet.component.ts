import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
    walletID = 1;
  constructor() { }

  ngOnInit(): void {
    this.walletID = 1;
  }

}
