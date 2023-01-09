import cogoToast from "cogo-toast";

class CogoToast {
  SuccessToast(message) {
    cogoToast.success(message);
  }
  ErrorToast(message) {
    cogoToast.error(message);
  }
}

export const { ErrorToast, SuccessToast } = new CogoToast();
