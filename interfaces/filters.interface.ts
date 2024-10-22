export type SortFilters = 'by_name=asc' | 'by_name=desc' | 'by_price=low' | 'by_price=high';

export interface FiltersInterface {
    sort: SortFilters,
    is_available?: 'True' | 'False',
    name?: string,
}
