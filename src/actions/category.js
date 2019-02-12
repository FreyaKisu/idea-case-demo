import ActionTypes from "./ActionTypes";
import fetchTestCategories from "../Models/Test";

export const categoriesAll_REQ = () => ({
  type: ActionTypes.CATEGORIES_ALL_REQ
});

export const categoriesAll_OK = categoryList => ({
  type: ActionTypes.CATEGORIES_ALL_OK,
  categoryList
});

export const categoriesAll_X = () => ({
  type: ActionTypes.CATEGORIES_ALL_X
});

export function fetchAllCategories() {
  return async (dispatch, getSate) => {
    dispatch(categoriesAll_REQ());
    const categoryList = fetchTestCategories();
    if (categoryList.length === 4) {
      dispatch(categoriesAll_X());
    }
    dispatch(categoriesAll_OK(categoryList));
  };
}
