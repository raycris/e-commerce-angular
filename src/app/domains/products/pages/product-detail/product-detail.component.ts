import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');
  private productService = inject(ProductService);

  ngOninit() {
    if (this.id) {
      this.productService.getOneProduct(this.id).subscribe({
        next: (product) => {
          this.product.set(product);
          if (product.image.length > 0) {
            this.cover.set(product.image[0]);
          }
        },
      });
    }
  }

  changeCover(newImage: string) {
    this.cover.set(newImage);
  }
}
