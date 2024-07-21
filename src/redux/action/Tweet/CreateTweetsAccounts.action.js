import axios from "axios";
import {
  CREATE_TWEETS_ACCOUNTS,
  FAILED_CREATE_TWEETS_ACCOUNTS,
  START_CREATE_TWEETS_ACCOUNTS,
  STORE_MESSAGE,
} from "../../Types";
import { aleartsToast } from "../../../alearts/alearts";
import { rootRoute } from "../../../Routes/Root.route";

function createTweetsAccountsAction({ textFileTweet, images, accounts }) {
  const api = rootRoute + "/api/v1/methods/tweetAccounts";
  const formData = new FormData();

  formData.append("csvFile", textFileTweet);

  // Append each image file to the formData
  images.forEach((image) => {
    formData.append("images", image);
  });

  accounts.forEach((account) => {
    formData.append("accounts[]", account);
  });

  return async (dispatch) => {
    dispatch({
      type: START_CREATE_TWEETS_ACCOUNTS,
    });
    const user = JSON.parse(localStorage.getItem("user"));
    const token = user.token;

    const response = await axios.post(api, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status === 200) {
      aleartsToast("success", "تم اضافة التغريدة بنجاح");
      dispatch({
        type: CREATE_TWEETS_ACCOUNTS,
      });
      dispatch({
        type: STORE_MESSAGE,
        payload: response.data.status,
      });
    } else {
      dispatch({
        type: FAILED_CREATE_TWEETS_ACCOUNTS,
      });
      if (response.errors) {
        dispatch({
          type: STORE_MESSAGE,
          payload: response.errors,
        });
      }
      aleartsToast("error", `خطأ !! لم يتم التغريدة \n ${response.errors}`);
    }
  };
}

export default createTweetsAccountsAction;
