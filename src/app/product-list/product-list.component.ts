import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortPipe } from '../pipes/sort.pipe';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgxPaginationModule, FilterPipe, FormsModule, SortPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  productList: any = []; //to store all products
  searchText: string = ''; //store search text
  selectedSortOption: string = ''; //store selected sort option
  p: number = 1;

  onSearchChange() {
    this.p = 1;
  }

  onSortChange() {
    this.p = 1;
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  //funtion to get all products
  getAllProducts() {
    this.api.getAllProductsAPI().subscribe({
      next: (res: any) => {
        console.log(res);
        this.productList = res.products;
        console.log(this.productList);
      },
      error: (err: any) => console.log(err),
    });
  }

  //navigate to corresponding product
  viewProduct(id: any) {
    this.router.navigateByUrl(`${id}`);
  }
}
