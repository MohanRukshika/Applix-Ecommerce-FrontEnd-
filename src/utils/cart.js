export function getCart() {
    const cartString = localStorage.getItem("cart");

    if (cartString == null) {
        localStorage.setItem("cart", "[]");
        return [];
    }

    return JSON.parse(cartString);
}


export function addToCart(product, quantity) {

    const cart = getCart();

    const existingProductIndex = cart.findIndex(
        (item) => item.product.productId == product.productId
    );

    if (existingProductIndex == -1) {

        if (quantity > 0) {

            if (quantity > product.stock) {
                console.log("Not enough stock");
                return;
            }

            cart.push({
                product: {
                    productId: product.productId,
                    name: product.name,
                    image: product.image[0],
                    labelPrice: product.labelPrice,
                    stock: product.stock,
                    price: product.price
                },
                quantity: quantity
            });
        }

    } else {

        const newQuantity =
            cart[existingProductIndex].quantity + quantity;

        if (newQuantity <= 0) {

            cart.splice(existingProductIndex, 1);

        } else {

            if (newQuantity > product.stock) {
                console.log(
                    `Only ${product.stock} items are available`
                );
                return;
            }

            cart[existingProductIndex].quantity = newQuantity;
        }
    }

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


/*
    Save the current cart to localStorage
*/
export function updateCart(cart) {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


/*
    Remove a product completely from the cart
*/
export function removeFromCart(productId) {

    const cart = getCart();

    const newCart = cart.filter(
        (item) => item.product.productId != productId
    );

    localStorage.setItem(
        "cart",
        JSON.stringify(newCart)
    );

    return newCart;
}


export function getCartTotal(cart) {

    let total = 0;

    for (let i = 0; i < cart.length; i++) {

        total +=
            cart[i].product.price *
            cart[i].quantity;
    }

    return total;
}