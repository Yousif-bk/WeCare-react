
import { SetProductsAction } from '../actions/productActions';
import { ProductActionTypes } from '../models/ProductActionTypes ';
import { Product } from '../models/ProductsModel';

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

const productReducer = (state = initialState, action: SetProductsAction): ProductState => {
    switch (action.type) {
        case ProductActionTypes.SET_PRODUCTS:
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export default productReducer;
