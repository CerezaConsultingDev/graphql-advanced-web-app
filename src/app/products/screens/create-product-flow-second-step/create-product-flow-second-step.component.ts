import { Component, OnInit } from '@angular/core';
import { CreateProductFlowBLoc } from '../../blocs/create-product-flow-bloc';

@Component({
  selector: 'app-create-product-flow-second-step',
  templateUrl: './create-product-flow-second-step.component.html',
  styleUrls: ['./create-product-flow-second-step.component.scss'],
})
export class CreateProductFlowSecondStepComponent implements OnInit {
  published = false;

  constructor(public createProductFlow: CreateProductFlowBLoc) {}

  ngOnInit(): void {}

  handleSave() {
    this.createProductFlow.setStep2Info({
      published: this.published,
    });
    console.log(this.createProductFlow.productFlowInfo.value);
  }
}
