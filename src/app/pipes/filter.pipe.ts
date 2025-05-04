import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(allProducts: any[], searchText: string): any[] {
    // if search bar is empty
    if (!allProducts || !searchText) return allProducts;
    searchText = searchText.toLowerCase();

    //search logic
    return allProducts.filter(
      (item) =>
        item.title.toLowerCase().includes(searchText) ||
        item.category.toLowerCase().includes(searchText)
    );
  }
}
