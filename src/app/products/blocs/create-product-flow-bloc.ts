import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ProductFlowInfo = {
  name: string;
  published: boolean;
};

@Injectable({
  providedIn: 'root',
})
export class CreateProductFlowBLoc {
  productFlowInfo = new BehaviorSubject<ProductFlowInfo>(null);

  constructor() {
    this.restore();
  }

  setStep1Info(info: Pick<ProductFlowInfo, 'name'>) {
    this.productFlowInfo.next({
      ...this.productFlowInfo.value,
      name: info.name,
    });
    this.persist();
  }

  setStep2Info(info: Pick<ProductFlowInfo, 'published'>) {
    this.productFlowInfo.next({
      ...this.productFlowInfo.value,
      published: info.published,
    });
    this.persist();
  }

  private persist() {
    localStorage.setItem(
      'create-product-flow-info',
      JSON.stringify(this.productFlowInfo.value)
    );
  }

  private restore() {
    this.productFlowInfo.next(
      JSON.parse(localStorage.getItem('create-product-flow-info'))
    );
  }
}
