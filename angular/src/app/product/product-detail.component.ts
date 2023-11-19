import { ProductCategoryInListDto } from '../proxy/product-categories/models';
import { ProductCategoriesService } from '../proxy/product-categories/product-categories.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ManufacturerInListDto, ManufacturersService } from '@proxy/manufacturers';
import { ProductDto, ProductsService } from '@proxy/products';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Subject, forkJoin, takeUntil } from 'rxjs';
import { UtilityService } from '../shared/services/utility.service';
import { productTypeOptions } from '@proxy/tedu-ecommerce/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject<void>();
  blockedPanel: boolean = false;
  btnDisabled: boolean = false;

  public form: FormGroup;

  // Dropdown
  productCategories: any[] = [];
  manufacturers: any[] = [];
  productTypes: any[] = [];
  selectedEntity = {} as ProductDto;

  constructor(
    private productService: ProductsService,
    private productCategoryService: ProductCategoriesService,
    private manufacturerService: ManufacturersService,
    private formBuilder: FormBuilder,
    private config: DynamicDialogConfig,
    private ref: DynamicDialogRef,
    private utilityService: UtilityService
  ) {}

  validationMessages = {
    code: [{ type: 'required', message: 'Code is unique' }],
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', message: 'Please enter within 50 characters' },
    ],
    slug: [{ type: 'required', message: 'URL is unique' }],
    sku: [{ type: 'required', message: 'SKU is required' }],
    manufacturerId: [{ type: 'required', message: 'Manufacturer is required' }],
    categoryId: [{ type: 'required', message: 'Must select category' }],
    productType: [{ type: 'required', message: 'Must choose product type' }],
    sortOrder: [{ type: 'required', message: 'Please enter sort order' }],
    sellPrice: [{ type: 'required', message: 'Please enter sell price' }],
  };

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  ngOnInit(): void {
    this.buildForm();
    this.loadProductTypes();

    // Load data to form
    var productCategories = this.productCategoryService.getListAll();
    var manufacturers = this.manufacturerService.getListAll();
    this.toggleBlockedUI(true);
    forkJoin({
      productCategories,
      manufacturers,
    })
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: any) => {
          // Push data to dropdown
          var productCategories = response.productCategories as ProductCategoryInListDto[];
          var manufacturers = response.manufacturers as ManufacturerInListDto[];

          productCategories.forEach(element => {
            this.productCategories.push({
              value: element.id,
              label: element.name
            })
          });

          manufacturers.forEach(element => {
            this.manufacturers.push({
              value: element.id,
              label: element.name
            })
          });

          // Load edit data to form
          if (this.utilityService.isEmpty(this.config.data?.id) == true) {
            this.toggleBlockedUI(false);
          } else {
            this.loadFormDetails(this.config.data?.id);
          }
        },
        error: () => {
          this.toggleBlockedUI(false);
        },
      });
  }

  generateSlug() {
    this.form.controls['slug'].setValue(this.utilityService.MakeSeoTitle(this.form.get('name').value));
  }

  loadFormDetails(id: string) {
    this.toggleBlockedUI(true);
    this.productService
      .get(id)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (response: ProductDto) => {
          this.selectedEntity = response;
          this.buildForm();
          this.toggleBlockedUI(false);
        },
        error: () => {
          this.toggleBlockedUI(false);
        },
      });
  }

  loadProductCategories() {
    this.productCategoryService.getListAll().subscribe((response: ProductCategoryInListDto[]) => {
      response.forEach(element => {
        this.productCategories.push({
          value: element.id,
          name: element.name,
        });
      });
    });
  }

  saveChange() {}

  loadProductTypes() {
    productTypeOptions.forEach(element => {
      this.productTypes.push({
        value: element.value,
        label: element.key
      })
    });
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: new FormControl(
        this.selectedEntity.name || null,
        Validators.compose([Validators.required, Validators.maxLength(50)])
      ),
      code: new FormControl(this.selectedEntity.code || null, Validators.required),
      slug: new FormControl(this.selectedEntity.slug || null, Validators.required),
      sku: new FormControl(this.selectedEntity.sku || null, Validators.required),
      manufacturerId: new FormControl(
        this.selectedEntity.manufacturerId || null,
        Validators.required
      ),
      categoryId: new FormControl(this.selectedEntity.categoryId || null, Validators.required),
      productType: new FormControl(this.selectedEntity.productType || null, Validators.required),
      sortOrder: new FormControl(this.selectedEntity.sortOrder || null, Validators.required),
      sellPrice: new FormControl(this.selectedEntity.sellPrice || null, Validators.required),
      visibility: new FormControl(this.selectedEntity.visibility || true),
      isActive: new FormControl(this.selectedEntity.isActive || true),
      seoMetaDescription: new FormControl(this.selectedEntity.seoMetaDescription || null),
      description: new FormControl(this.selectedEntity.description || null),
    });
  }

  private toggleBlockedUI(enabled: boolean) {
    if (enabled == true) {
      this.blockedPanel = true;
      this.btnDisabled = true;
    } else {
      setTimeout(() => {
        this.blockedPanel = false;
        this.btnDisabled = false;
      }, 1000);
    }
  }
}
