import { FiltersInterface } from "./filters.interface";

export interface BaseArguments {
    dispatch: any,
}

export interface GetProductsArguments extends BaseArguments {
    filters: FiltersInterface,
}
