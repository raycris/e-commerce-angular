import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../shared/models/product.model';
import { HeaderComponent } from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, ProductComponent, HeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = signal<Product[]>([]);

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'Producto 1',
        price: 12,
        image: 'https://picsum.photos/640/640?r=24',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 2',
        price: 124,
        image: 'https://picsum.photos/640/640?r=124',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 3',
        price: 123,
        image: 'https://picsum.photos/640/640?r=241',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 4',
        price: 12,
        image: 'https://picsum.photos/640/640?r=243',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 5',
        price: 124,
        image: 'https://picsum.photos/640/640?r=14',
        createAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'Producto 6',
        price: 123,
        image: 'https://picsum.photos/640/640?r=41',
        createAt: new Date().toISOString()
      },
    ];
    this.products.set(initProducts)
  }
  fromChild(event: string) {
    console.log('estamos en el padre');
    console.log(event);
  }
}
