import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-last-few-transactions',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule to use *ngFor
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.css']
})
export class LastFewTransactionsComponent {
  transactions = [
    { imgSrc: 'image1.jpg', title: 'Shoes', price: '$100', shop: 'Nike', location: 'Mall', status: 'Completed' },
    { imgSrc: 'image2.jpg', title: 'T-shirt', price: '$50', shop: 'Adidas', location: 'Downtown', status: 'Pending' }
  ];
}
