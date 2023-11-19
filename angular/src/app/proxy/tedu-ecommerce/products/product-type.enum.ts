import { mapEnumToOptions } from '@abp/ng.core';

export enum ProductType {
  Single = 1,
  Configurable = 2,
  Bundle = 3,
  Grouped = 4,
  Virtual = 5,
  Downloadable = 6,
}

export const productTypeOptions = mapEnumToOptions(ProductType);
