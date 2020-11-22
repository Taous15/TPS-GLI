import { Component, Input, OnInit } from '@angular/core';
import { PokeDetail } from '../pokemon';
import {PokeShareInfoService} from '../poke-share-info.service';
import { PokeAPIServiceService } from '../poke-apiservice.service';
@Component({
  selector: 'app-pokedetail',
  templateUrl: './pokedetail.component.html',
  styleUrls: ['./pokedetail.component.css'],
  providers: [PokeAPIServiceService, PokeShareInfoService] 

})
export class PokedetailComponent implements OnInit {
 
  @Input('detail')
  detail : PokeDetail;
  
  constructor(private pokeShareInfoService : PokeShareInfoService) { 
    this.pokeShareInfoService.getObservable().subscribe( e => console.log('e' + e));
  }

  ngOnInit(): void {
    // console.log(this.pokeShareInfoService.getValue());
  }

}
