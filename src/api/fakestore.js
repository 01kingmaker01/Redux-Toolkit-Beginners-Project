import {
  setIdTitleOfProduct,
  setProduct,
} from "../redux/slices/fakeStoreSlice";

export const getProduct = (id) => async (dispatch, getData) => {
  const data = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => {
      return res.json();
    }
  );
  dispatch(setProduct(data));
  dispatch(setIdTitleOfProduct(data));

  console.table({ ...getData().demoStore });
};
