import { format } from 'date-fns';


export function formatPrice(price: number): string {
    return price.toLocaleString('ru-RU') + ' ₽';
}

export function formatDate(date: string): string {
    return format(new Date(date), 'dd.MM.yyyy');
}

export function formatTimestamp(timestamp: number): string {
    return format(new Date(timestamp * 1000), 'dd.MM.yyyy');
}
