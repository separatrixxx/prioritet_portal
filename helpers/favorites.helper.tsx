export async function setFavorite(productId: number): Promise<void> {
    if (typeof window !== 'undefined') {
        let favorites = getFavorites();

        if (favorites.includes(productId)) {
            favorites = favorites.filter(id => id !== productId && id !== null);
        } else {
            favorites.push(productId);
        }

        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
}

export function getFavorites(): number[] {
    if (typeof window !== 'undefined') {
        const favorites = localStorage.getItem('favorites');
        
        return favorites ? JSON.parse(favorites) : [];
    }

    return [];
}

export function checkFavorite(productId: number): boolean {
    const favorites = getFavorites();

    return favorites.includes(productId);
}
