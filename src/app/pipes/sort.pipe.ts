import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(products: any[], sortOption: string): any[] {
    if (!products || !sortOption) return products; //no sorting applied

    let sortedProducts = [...products];

    //sorting logic
    switch (sortOption) {
      case 'price-asc':
        return sortedProducts.sort((a, b) => a.price - b.price); //price low to high
      case 'price-desc':
        return sortedProducts.sort((a, b) => b.price - a.price); //price high to low
      case 'rating-asc':
        return sortedProducts.sort((a, b) => a.rating - b.rating); //rating low to high
      case 'rating-desc':
        return sortedProducts.sort((a, b) => b.rating - a.rating); //rating high to low
      default:
        return products; //show unsorted products
    }
  }
}
