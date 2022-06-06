import axios from "axios";
import { Alert } from "react-native";

const baseURL = "http://mantra16.herokuapp.com/";

axios.defaults.withCredentials = true;

const DefaultHttpOptions = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

const getOptions = (headers) => {
  const options = {
    ...DefaultHttpOptions,
    headers: { ...DefaultHttpOptions.headers, ...headers },
  };
  // TODO reading token from local storage and putting it header
  return options;
};

const get = (path, customOptions = {}) => {
  const { headers, ...others } = customOptions;
  const options = getOptions(headers);
  return axios
    .get(baseURL + path, { ...options, ...others })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      // Error
      if (error.response) {
        console.log("=====>", error.response.data);
        return error.response;
      }
    });
};

const post = (path, body, customOptions = {}) => {
  const { headers, ...others } = customOptions;
  const options = getOptions(headers);
  return axios
    .post(baseURL + path, body, { ...options, ...others })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      if (error.response) {
        Alert.alert("", error.response.data.message);
        console.log(error.response.data);
        return error.response;
      }
    });
};

const put = (path, body) => {
  const options = getOptions();
  return axios
    .put(baseURL + path, body, { ...options })
    .then((result) => {
      return result;
    })
    .catch((error) => {
      if (error.response) {
        console.log(error.response.data.message);
        return error.response;
      }
    });
};

const httpClients = {
  get,
  post,
  put,
};

export default httpClients;
