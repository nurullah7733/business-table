import axios from "axios";
import store from "../app/store";
import {
  setProductList,
  setProductTotal,
} from "../features/product/productSlice";
import { hideLoader, showLoader } from "../features/settings/settingsSlice";
import { ErrorToast, SuccessToast } from "../helper/cogoToast";

let baseUrl = "http://localhost:8080";
export const getProductList = (pageNo, perPage, searchKeyword) => {
  let url = `${baseUrl}/products/${pageNo}/${perPage}/${searchKeyword}`;
  store.dispatch(showLoader());
  return axios
    .get(url)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        if (res.data["data"][0].Total.length > 0) {
          store.dispatch(setProductList(res.data["data"][0].Rows));
          store.dispatch(setProductTotal(res.data["data"][0].Total[0].count));
          return true;
        } else {
          SuccessToast("Data not found");
          store.dispatch(setProductList(res.data["data"][0].Rows));
          store.dispatch(setProductTotal(res.data["data"][0].Total));
          return true;
        }
      } else {
        ErrorToast("Something went wrong");
        return false;
      }
    })
    .catch((e) => {
      ErrorToast("Something went wrong");
      store.dispatch(hideLoader());
      return false;
    });
};
