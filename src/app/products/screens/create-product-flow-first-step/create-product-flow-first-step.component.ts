import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateProductFlowBLoc } from '../../blocs/create-product-flow-bloc';

@Component({
  selector: 'app-create-product-flow-first-step',
  templateUrl: './create-product-flow-first-step.component.html',
  styleUrls: ['./create-product-flow-first-step.component.scss'],
})
export class CreateProductFlowFirstStepComponent implements OnInit {
  productName: string;

  constructor(
    public createProductFlow: CreateProductFlowBLoc,
    private router: Router
  ) {
    this.productName = this.createProductFlow.productFlowInfo.value.name;
  }

  ngOnInit(): void {}

  handleSubmit() {
    this.createProductFlow.setStep1Info({ name: this.productName });
    this.router.navigate(['create-product-flow-second-step']);
  }
}
