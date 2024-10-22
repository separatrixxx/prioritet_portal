import { FiltersInterface } from "./filters.interface";

export interface BaseArguments {
    dispatch: any,
}

export interface GetProductsArguments extends BaseArguments {
    type: string,
    limit: number,
    offset: number,
    filters: FiltersInterface,
}

export interface GetProductsForCategoriesArguments extends Omit<GetProductsArguments, 'type'> {
    categoryId: number,
}
