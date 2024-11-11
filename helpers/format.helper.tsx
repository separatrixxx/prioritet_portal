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

export function formatText(count: number): 'gen' | 'nom' | 'sin' {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
  
    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
      return 'gen';
    }
    
    if (lastDigit === 1) {
      return 'nom';
    }
    
    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'sin';
    }
    
    return 'gen';
};
  
