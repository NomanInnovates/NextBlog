import React from "react";
import MainNavigation from "./mainNavigation";

export default function Layout(props) {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
}
