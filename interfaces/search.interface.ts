export interface SearchInterface {
    class: string,
    results: SearchItemInterface[],
    total_count: number,
    limit: number,
    offset: number,
    search_term: string,
    ngrams: string[],
}

export interface SearchItemInterface {
    id: number,
    name: string,
    description: string | null,
    rank: number | null,
    class: string,
}
