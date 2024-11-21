import axios, { AxiosResponse } from "axios";
import { setCart, setCartDefault } from "../features/cart/cartSlice";
import { CartIdItem, UserCartsInterface } from "../interfaces/cart.interface";
import { BaseArguments, CartAddArguments, GetUserArguments, UpdateCartArguments } from "../interfaces/refactor.interface";


export async function getUserCart(args: GetUserArguments) {
    const { userId, accessToken, dispatch } = args;

    try {
        const { data: response }: AxiosResponse<UserCartsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            `/users/get/${userId}/carts`,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });

        if (response.total_count === 0) {
            createUserCart(userId, accessToken);
        }

        getCartById(response.carts[0].id, {
            dispatch: dispatch,
        });
    } catch (err) {
        console.error('Get user cart error: ' + err);
    }
}

export async function getGuestCart(guestId: string | null, args: BaseArguments) {
    const { dispatch } = args;

    try {
        const { data: response }: AxiosResponse<UserCartsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/cart/get/guest_active_cart?guest_id=' + guestId,
        );

        if (response.total_count === 0) {
            createGuestCart(guestId);
        }

        getCartById(response.carts[0].id, {
            dispatch: dispatch,
        });
    } catch (err) {
        console.error('Get guest cart error: ' + err);
    }
}

export async function getCartById(cartId: number, args: BaseArguments) {
    const { dispatch } = args;

    try {
        dispatch(setCartDefault());

        const { data: response }: AxiosResponse<UserCartsInterface> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN +
            '/cart/get/cart?cart_id=' + cartId,
        );
        console.log(response)

        dispatch(setCart(response));
    } catch (err) {
        console.error('Get cart by id error: ' + err);
    }
}

export async function createUserCart(userId: number, accessToken: string | null) {
    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            `/users/create/${userId}/cart`, {},
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
    } catch (err) {
        console.error('Create cart error: ' + err);
    }
}

export async function createGuestCart(guestId: string | null) {
    try {
        await axios.post(process.env.NEXT_PUBLIC_DOMAIN +
            '/cart/create/guest_cart?guest_id=' + guestId,
        );
    } catch (err) {
        console.error('Create guest error: ' + err);
    }
}

export async function addCart(args: CartAddArguments) {
    const { productId, cart, dispatch } = args;

    const updatedItems: CartIdItem[] = [...cart.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
    }))];

    const existingItem = updatedItems.find(item => item.product_id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        updatedItems.push({
            product_id: productId,
            quantity: 1,
        });
    }

    updateCart({
        cartId: cart.id,
        items: updatedItems,
        dispatch: dispatch,
    });
}

export async function removeCart(args: CartAddArguments) {
    const { productId, cart, dispatch } = args;

    const updatedItems: CartIdItem[] = cart.items
        .filter(item => item.product_id !== productId)
        .map(item => ({
            product_id: item.product_id,
            quantity: item.quantity,
        }));

    updateCart({
        cartId: cart.id,
        items: updatedItems,
        dispatch: dispatch,
    });
}

export async function minusCart(args: CartAddArguments) {
    const { productId, cart, dispatch } = args;

    const updatedItems: CartIdItem[] = [...cart.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
    }))];

    const existingItem = updatedItems.find(item => item.product_id === productId);

    if (existingItem) {
        if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
        } else {
            const index = updatedItems.indexOf(existingItem);

            updatedItems.splice(index, 1);
        }
    }

    updateCart({
        cartId: cart.id,
        items: updatedItems,
        dispatch: dispatch,
    });
}

export async function plusCart(args: CartAddArguments) {
    const { productId, cart, dispatch } = args;

    const updatedItems: CartIdItem[] = [...cart.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
    }))];

    const existingItem = updatedItems.find(item => item.product_id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    }

    updateCart({
        cartId: cart.id,
        items: updatedItems,
        dispatch: dispatch,
    });
}

export async function updateCart(args: UpdateCartArguments) {
    const { cartId, items, dispatch } = args;

    try {
        await axios.patch(process.env.NEXT_PUBLIC_DOMAIN +
            '/cart/update/cart?cart_id=' + cartId,
            {
                items: items,
            }
        );

        getCartById(cartId, {
            dispatch: dispatch,
        });
    } catch (err) {
        console.error('Update cart error: ' + err);
    }
}
