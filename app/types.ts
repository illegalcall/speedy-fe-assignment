export interface ITopic {
	id: string;
	title: string;
	tags: string[];
	category: CategoryEnum;
}

export enum CategoryEnum {
	All = 'All',
	Custom = 'Custom',
	ICP = 'ICP',
	Mission = 'Mission',
	Product = 'Product',
}
