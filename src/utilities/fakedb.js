// use local storage to manage cart data
const addToData = id => {
    let updateCart = {};
    //get the update cart from local storage
    const storedCart = localStorage.getItem('update-cart');
    if (storedCart) {
        updateCart = JSON.parse(storedCart);
    }

    //Add quantity


    // Less quantity
    const quantity = updateCart[id];
    if (quantity) {
        const newQuantity = quantity - 1;
        updateCart[id] = newQuantity;
    }
    else {
        updateCart[id] = 1;
    }
    localStorage.setItem('update-cart', JSON.stringify(updateCart));
}

const getStoredCart = () => {
    let updateCart = {};

    //get the update cart from local storage
    const storedCart = localStorage.getItem('update-cart');
    if (storedCart) {
        updateCart = JSON.parse(storedCart);
    }
    return updateCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('update-cart');
    if (storedCart) {
        const updateCart = JSON.parse(storedCart);
        if (id in updateCart) {
            delete updateCart[id];
            localStorage.setItem('update-cart', JSON.stringify(updateCart));
        }
    }
}

const deleteUpdateCart = () => {
    localStorage.removeItem('update-cart');
}

export {
    addToData,
    getStoredCart,
    removeFromDb,
    deleteUpdateCart
}