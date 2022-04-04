import React from "react";
import { NavBar, SignUpForm, useAuthorization } from "./importsAndExports";
function SignUpPage() {

  return (
    <>
      <NavBar />
      <div className="banner-upper-empty"></div>
      <div className="products-main">
        <SignUpForm />
      </div>
    </>
  );
}

export { SignUpPage };