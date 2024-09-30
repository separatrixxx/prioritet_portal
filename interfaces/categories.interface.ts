export type Categories = 'product' | 'harmful' | 'proceed';

export interface CategoryInterface {
    id: number,
    name: string,
    category_for: Categories,
    object_id_list: number[],
}
