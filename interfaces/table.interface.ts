export interface TableDataInterface {
    text: string | null,
    link?: string | { name: string; url: string }[],
    isActive?: boolean,
}
