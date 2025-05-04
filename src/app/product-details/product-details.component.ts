import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private api: ApiService,
    private router: Router
  ) {}

  productId: any = ''; //store productId
  product: any = {}; //store product details
  relatedProducts: any = []; //store related products

  ngOnInit(): void {
    this.route.params.subscribe((res: any) => {
      //to get id
      console.log(res);
      this.productId = res.id;
      console.log(this.productId);
      this.api.getAProductAPI(this.productId).subscribe((res: any) => {
        console.log(res);
        this.product = res;
        this.relatedProduct(this.product.category); //for getting related products using product category
      });
    });
  }

  //to view related
  viewRelated(id: any) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([id]);
    });
  }

  //to display all related products
  relatedProduct(category: any) {
    this.api.getAllProductsAPI().subscribe((res: any) => {
      this.relatedProducts = res.products.filter(
        (item: any) => item.category === category && item.id != this.productId
      );
      console.log(this.relatedProducts);
    });
  }
}
