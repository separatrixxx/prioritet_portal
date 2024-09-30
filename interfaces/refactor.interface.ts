export interface BaseArguments {
    dispatch: any,
}

export interface GetProductsArguments extends BaseArguments {
    type: string,
}

export interface GetProductsForCategoriesArguments extends BaseArguments {
    categoryId: number,
}
