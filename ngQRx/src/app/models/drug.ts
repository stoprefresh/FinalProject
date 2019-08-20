export class Drug {
  id: number;
  productid: string;
  productNdc: string;
  productTypeName: string;
  proprietaryName: string;
  propNameSuffix: string;
  genericName: string;
  dosageForm: string;
  routeName: string;
  strength: string;
  unit: string;
  pharmClasses: string;
  imgUrl: string;
  referenceUrl: string;

  constructor(
    id?: number,
    productid?: string,
    productNdc?: string,
    productTypeName?: string,
    proprietaryName?: string,
    propNameSuffix?: string,
    genericName?: string,
    dosageForm?: string,
    routeName?: string,
    strength?: string,
    unit?: string,
    pharmClasses?: string,
    imgUrl?: string,
    referenceUrl?: string
  ) {
  this.id = id;
  this.productid = productid;
  this.productNdc = productNdc;
  this.productTypeName = productTypeName;
  this.proprietaryName = proprietaryName;
  this.propNameSuffix = propNameSuffix;
  this.genericName = genericName;
  this.dosageForm = dosageForm;
  this.routeName = routeName;
  this.strength = strength;
  this.unit = unit;
  this.pharmClasses = pharmClasses;
  this.imgUrl = imgUrl;
  this.referenceUrl = referenceUrl;
  }
}
