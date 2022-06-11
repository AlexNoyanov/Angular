import {HttpClientModule} from "@angular/common/http";

export class DataLoadingService {
  @NgModule({
    imports: [
      HttpClientModule,
    ],
  })
  constructor() { }
  //getCardData(cardID:number){}
  getAllCardsData(walletID:number){

  }

  }
}
