import { ProductActionTypes } from "../models/ProductActionTypes ";
import { Product} from "../models/ProductsModel";


export interface SetProductsAction {
    type: ProductActionTypes.SET_PRODUCTS;
    payload: Product[];
}

export const setProducts = (products: Product[]): SetProductsAction => ({
    type: ProductActionTypes.SET_PRODUCTS,
    payload: products,
});

