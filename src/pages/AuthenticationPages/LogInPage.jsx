import React from "react";

import { NavBar, LogInForm } from "components";

function LogInPage() {
  return (
    <>
        <NavBar />
        <div className="banner-upper-empty"></div>
        <div className="products-main">
          <LogInForm />
        </div>
    </>
  );
}

export { LogInPage };
