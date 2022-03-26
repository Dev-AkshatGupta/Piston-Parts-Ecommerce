import "./toast.css";
import React from "react";

// I m managing whole toast functionality from the auth provider
function Toast({ type, message, display = "none" }) {
  const style =
    type === "normal"
      ? "alert"
      : type === "error"
      ? "alert error"
      : type === "success"
      ? "alert success"
      : null;

  return (
    <div
      className={`text width-toast toast-position ${style}`}
      style={{ display: display }}
    >
      {message}
    </div>
  );
}

export { Toast };
