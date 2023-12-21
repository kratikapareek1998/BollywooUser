import axios from "axios";
import moment from "moment";
import { PermissionsAndroid, Platform } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import Toast from "react-native-simple-toast";
import {
  ApiConstants,
  AppConstants,
  LocalStorageKeys,
  MatrixConstant,
  StoreConstantValues,
} from "../constants/Constants";
import R from '../res/R';
// import { removeData } from "./LocalStorage";

const defaultGalleryOptions = {
  cropping: true,
  // cropperCircleOverlay: false,
  // sortOrder: "none",
  // compressImageMaxWidth: 1000,
  // compressImageMaxHeight: 1000,
  // compressImageQuality: 1,
  // compressVideoPreset: "MediumQuality",
  // includeExif: true,
  cropperStatusBarColor: "white",
  cropperToolbarColor: "white",
  cropperActiveWidgetColor: "white",
  //cropperToolbarWidgetColor: BLUE,
};

/**
 * This function will provide you width of any UI component
 * using screen width and value should be in percentage.
 * @param {number} value in percentage
 * @returns {number} Width when calculation completed.
 */
export const getWidth = (value = 0) => {
  var width = (MatrixConstant.SCREEN_WIDTH * value) / 100;
  return width;
};

/**
 * This function will provide you height of any UI component
 * using screen hight and value should be in percentage.
 * @param {number} value in percentage
 * @returns {number} Height when calculation completed.
 */
export const getHeight = (value = 0) => {
  var height = (MatrixConstant.SCREEN_HEIGHT * value) / 100;
  return height;
};

/**
 * This function will convert any given time to seconds.
 * @param {String} time as String
 * @returns {String} Converted Seconds as String.
 */
export const convertToSeconds = (time = "") => {
  if (time) {
    return time
      .split(":")
      .reverse()
      .reduce((prev, curr, i) => prev + curr * Math.pow(60, i), 0);
  }
};

export function getApiErrorMessage(value) {
    const defaultErrorMessage = R.strings.serverError;
    if (value?.message) {
        let err = value?.response?.data?.message;
        if (isNullOrEmpty(err)) {
            err = value?.message;
            return err;
        }
        return err ? err : defaultErrorMessage;
    }
    return defaultErrorMessage;
}

/**
 * This function will capitalize the first character of any word.
 * @param {String} value as String
 * @returns {String} Converted String
 */
export const capitalize = (value = "") => {
  let uppercaseFirstLetter = "";
  if (value) {
    uppercaseFirstLetter =
      String(value).charAt(0).toUpperCase() + String(value).slice(1);
  } else {
    uppercaseFirstLetter = "0";
  }
  return uppercaseFirstLetter;
};

/**
 * This function will print console and handle when to show console.
 * @param {*} TAG
 * @param {*} param
 */
export const printConsole = (TAG = "TAG", param = "param") => {
  if (AppConstants.IS_LOG) {
    console.log(TAG, param);
  }
};

/**
 * Image picker with camera
 * @param pickerOptions
 * @returns image or error
 */
export const launchCamera = (pickerOptions) => {
  return ImagePicker.openCamera({
    cropping: true,
    freeStyleCropEnabled: true,
    includeExif: true,
    width: 300,
    height: 400,
    ...pickerOptions,
  })
    .then((data) => data)
    .catch((e) => e);
};

/**
 * Image picker with gallery
 * @param pickerOptions
 * @returns image or error
 */
export const launchGallery = (pickerOptions) => {
  return ImagePicker.openPicker({
    freeStyleCropEnabled: true,
    ...defaultGalleryOptions,
    ...pickerOptions,
  })
    .then((data) => data)
    .catch((e) => {
      return { error: e };
    });
};

/**
 * This function is used to show Toast.
 * @param {*} msg String to show as message
 * @returns nothing
 */
export const ShowToast = (msg = "") => {
  return setTimeout(() => {
    Toast.show(msg, Toast.SHORT);
  }, 250);
};

/**
 * This function is used to convert time into 24 hrs.
 * @param {*} time12h
 * @returns converted time
 */
export const convertTime12to24 = (time12h = "") => {
  const [time, modifier] = time12h.split(" ");
  let [hours, minutes] = time.split(":");
  if (hours === "12") {
    hours = "00";
  }
  if (modifier === "PM" || modifier === "pm") {
    hours = parseInt(hours, 10) + 12;
  }
  return hours + ":" + minutes;
};

/**
 * This function is used to convert UTC to local time.
 * @param {*} UTC time which need to convert
 * @returns converted Local time
 */
export const renderTimeFromUTC = (time = "") => {
  let ngbDt;
  let timeData;
  const local = moment.utc(time).local().format(AppConstants.TIME_FORMAT_APP);
  timeData = local.split(":");
  if (timeData && timeData.length === 3) {
    ngbDt = {
      hour: parseInt(timeData[0], 10),
      minute: parseInt(timeData[1], 10),
      second: 0,
    };
  } else {
    ngbDt = { hour: 0, minute: 0, second: 0 };
  }
  return ngbDt;
};

/**
 * This function is used to get current date.
 * @returns current date/time format
 */
export const getCurrentDate = () => {
  return moment().format(ApiConstants.SERVER_DATE_TIME_FORMAT);
};

/**
 * This function is used to check otp length.
 * @returns otp text
 */
export const getOTPTextChucks = (numberOfInputs, inputCellLength, text) => {
  let regExp = new RegExp(".{1," + inputCellLength + "}", "g");
  let otpText = text ? regExp.test(text) : [];
  otpText = otpText.slice(0, numberOfInputs);
  return otpText;
};

/**
 * This function is used to check text is only number.
 * @returns text
 */
export const basicTextValidation = (text) => {
  const validText = /^[0-9a-zA-Z]+$/;
  return text.match(validText);
};

/**
 * This function is used to format time ti milliseconds
 * @returns time in ms
 */
export const formatMilliseconds = (milliseconds) => {
  const remainingSec = Math.round(milliseconds / 1000);
  const seconds = parseInt((remainingSec % 60).toString(), 10);
  const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
  const hours = parseInt((remainingSec / 3600).toString(), 10);
  const s = seconds < 10 ? "0" + seconds : seconds;
  const m = minutes < 10 ? "0" + minutes : minutes;
  let h = hours < 10 ? "0" + hours : hours;
  h = h === "00" ? "" : h + ":";
  return h + m + ":" + s;
};

// export const resetLocalData = async () => {
//   await removeData(LocalStorageKeys.USER_DATA);
//   StoreConstantValues.USER_ACCESS_TOKEN = "";
//   StoreConstantValues.USER_ID = "";
//   StoreConstantValues.USER_INFO_DATA = "";
//   StoreConstantValues.BASE_URL = StoreConstantValues.BASE_URL;
//   NavigationService.navigateToClearStack("Login");
// };

export const commafy = (num) => {
  if (num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }
};

export const getPrice = (price) => {
  if (price) {
    let price1 = commafy(parseFloat(price).toFixed(2));
    let decimalPrice = price1.split(".")[0];
    return decimalPrice;
  } else {
    return "0";
  }
};

export const getDecimalPrice = (price) => {
  if (price) {
    let price1 = commafy(parseFloat(price).toFixed(2));
    let decimalPrice = price1.split(".")[1];
    return decimalPrice;
  } else {
    return "00";
  }
};

export const roundToIncrease = (count, product_set, type = null) => {
  if (type === null) {
    return parseInt((count / product_set + 1) * product_set);
  } else {
    return Math.floor(count / product_set) * product_set;
  }
};

export const roundToDecrease = (count, product_set) => {
  if (count + "" > 0) {
    return parseInt((count / product_set - 1) * product_set);
  } else {
    return parseInt((count / product_set) * product_set);
  }
};

export const calculateSubTotal = (allPrice) => {
  if (allPrice) {
    return allPrice.reduce(
      (accumulator, current) =>
        accumulator + current.product_price * current.productQty,
      0
    );
  }
};

export const basicValidation = (text) => {
  const validText = /^[0-9a-zA-Z]+$/;
  return text.match(validText);
};

