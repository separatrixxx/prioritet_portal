export async function setLocalCart(productId: number): Promise<void> {
    if (typeof window !== 'undefined') {
        let cart = getCart();

        const existingProduct = cart.find(item => item.id === productId);

        if (existingProduct) {
            cart = cart.filter(item => item.id !== productId);
        } else {
            cart.push({ id: productId, count: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export function cartLocalPlus(productId: number, maxCount: number): void {
    if (typeof window !== 'undefined') {
        let cart = getCart();

        const product = cart.find(item => item.id === productId);

        if (product) {
            if (product.count < maxCount) {
                product.count += 1;
            }
        } else {
            cart.push({ id: productId, count: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export function cartLocalMinus(productId: number): void {
    if (typeof window !== 'undefined') {
        let cart = getCart();

        const productIndex = cart.findIndex(item => item.id === productId);
        if (productIndex !== -1) {
            const product = cart[productIndex];

            product.count -= 1;
        }

        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

export function getCart(): { id: number, count: number }[] {
    if (typeof window !== 'undefined') {
        const cart = localStorage.getItem('cart');
        
        return cart ? JSON.parse(cart) : [];
    }

    return [];
}

export function checkCart(productId: number): boolean {
    const cart = getCart();

    return cart.some(item => item.id === productId);
}

export function removeFromCart(productId: number): void {
    if (typeof window !== 'undefined') {
        let cart = getCart();

        cart = cart.filter(item => item.id !== productId);

        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
