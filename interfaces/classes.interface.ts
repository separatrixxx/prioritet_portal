export interface ClassInterface {
    results: ClassItem[],
    total_count: number,
    limit: number,
    offset: number,
}

export interface ClassItem {
    id: number,
    name: string,
    class_tag: string,
}
