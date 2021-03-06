import { Component, OnInit } from '@angular/core';

import { InventoryService } from '../../core/inventory.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items;
  selectedItem;

  constructor( 
    private inventoryitem : InventoryService
  ) { }

  ngOnInit(): void {
    this.items = this.inventoryitem.getInventories();
  }

  selectItem(item){
    this.selectedItem = item;
  }

}
