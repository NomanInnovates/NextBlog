import Link from "next/link";
import React from "react";
import classes from "../../styles/main-navigation.module.css";
import Logo from "./logo";

export default function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Post</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
