export type SortFilters = 'by_name=asc' | 'by_name=desc' | 'by_price=low' | 'by_price=high';


export interface FiltersInterface {
    start: {
        class: string,
        categoryId: number,
        limit: number,
        offset: number,
    },
    sort: SortFilters,
    is_available?: 'True' | 'False',
    name?: string,
    display: 'main' | 'grid' | 'rows' | 'lines',
}
