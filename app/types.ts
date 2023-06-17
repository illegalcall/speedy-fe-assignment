export interface ITopic {
	id: string;
	title: string;
	tags: string[];
	category: CategoryEnum;
}

export enum CategoryEnum {
	Custom = 'Custom',
	ICP = 'ICP',
	Mission = 'Mission',
	Product = 'Product',
}
