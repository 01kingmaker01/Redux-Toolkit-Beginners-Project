import {
  setIdTitleOfProduct,
  setProduct,
} from "../redux/slices/fakeStoreSlice";

export const getProduct = (id) => async (dispatch) => {
  try {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
      (res) => {
        return res.json();
      }
    );
    dispatch(setProduct(data));
    dispatch(setIdTitleOfProduct(data));
  } catch (error) {
    console.warn(error);
  }
};
