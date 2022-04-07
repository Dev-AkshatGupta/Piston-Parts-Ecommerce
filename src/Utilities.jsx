import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const toastStyles = {
  position: "top-left",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};
const notifyError = (text) => toast.error(text, toastStyles);
const notifySuccess = (text) => toast.success(text, toastStyles);
const notifyWarn = (text) => toast.warn(text, toastStyles);
const notifyInfo = (text) => toast.info(text, toastStyles);
export { notifyError, notifySuccess, notifyInfo, notifyWarn };
