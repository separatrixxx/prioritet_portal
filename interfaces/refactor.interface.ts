export interface BaseArguments {
    dispatch: any,
}

export interface GetProductsArguments extends BaseArguments {
    type: string,
    limit: number,
    offset: number,
}

export interface GetProductsForCategoriesArguments extends BaseArguments {
    categoryId: number,
}
