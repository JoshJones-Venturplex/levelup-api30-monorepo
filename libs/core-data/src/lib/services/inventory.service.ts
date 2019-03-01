import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '@workspace/core-data';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  baseUrl: String = 'https://inventory-api-aexafxxacq.now.sh';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<Item[]>(`${this.baseUrl}/Items/`);
  }

  createItem(Item) {
    return this.http.post<Item>(`${this.baseUrl}/Items`, Item);
  }
  
  updateItem(Item) {
    return this.http.patch<Item>(`${this.baseUrl}/Items/${Item.id}`, Item);
  }

  deleteItem(Item) {
    return this.http.delete<Item>(`${this.baseUrl}/Items/${Item.id}`);
  }
}
