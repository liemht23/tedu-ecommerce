import { mapEnumToOptions } from '@abp/ng.core';

export enum ProductType {
  Single = 0,
  Configurable = 1,
  Bundle = 2,
  Grouped = 3,
  Virtual = 4,
  Downloadable = 5,
}

export const productTypeOptions = mapEnumToOptions(ProductType);
