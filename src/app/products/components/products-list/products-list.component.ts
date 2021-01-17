import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { GET_PRODUCTS_QUERY } from '../../queries/get_products_query';
import { Observable } from 'rxjs';
import { UPDATE_PRODUCT_PUBLISHED_MUTATION } from '../../mutations/update-product-published-mutation';
import { DELETE_PRODUCT_MUTATION } from '../../mutations/delete-product-mutation';
import { ProductModel } from '../../models/products-model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements OnInit {
  productsResult$: Observable<ApolloQueryResult<{ productos: ProductModel[] }>>;

  constructor(private apollo: Apollo) {
    this.productsResult$ = this.apollo
      .watchQuery<{ productos: ProductModel[] }>({
        query: GET_PRODUCTS_QUERY,
      })
      .valueChanges.pipe();
  }

  ngOnInit(): void {}

  handlePublishedClick(productId: string, published: boolean) {
    this.apollo
      .mutate({
        mutation: UPDATE_PRODUCT_PUBLISHED_MUTATION,
        variables: {
          id: productId,
          data: {
            publicado: published,
          },
        },
      })
      .subscribe();
  }

  handleDelete(productId: string) {
    this.apollo
      .mutate({
        mutation: DELETE_PRODUCT_MUTATION,
        variables: {
          id: productId,
        },
        refetchQueries: [
          {
            query: GET_PRODUCTS_QUERY,
          },
        ],
      })
      .subscribe();
  }
}
