// ralative: tương đối
// import thuan1 from '../../../assets/icons/thuan1.png'
// import IconSearch from 'src/assets/icons/icon-search'
import clsx from "classnames/bind";
// const clsx = require("calssnames/bind")

const cx = clsx.bind(css);
//-----------------------------------

import css from "./header.module.css";
import thuan1 from "src/assets/icons/thuan.svg";
// import IconCart from 'src/assets/icons/icon-cart'
import { Link } from "react-router-dom";

import { IconCart, IconSearch } from "src/assets/icons";

function Header() {
  console.log(css);
  return (
    <>
      <header className={css["header"]}>
        <img className={css["logo"]} src={thuan1} />

        <div className={css.left}>
          <div className={css.search}>
            <IconSearch />
            <span>Search</span>
          </div>
          <div className={css.cart}>
            <IconCart />
            <span>(1)</span>
          </div>
          <div className={cx("auth", "margin-left")}>
            <button className={css.login}>Login</button>
            <button className={css.register}>Register</button>
          </div>
        </div>
      </header>
      <nav className={cx("nav")}>
        <Link className={cx("link", "link-active")} to={"/"}>
          Home
        </Link>
        <Link className={cx("link")} to={"/"}>
          Men
        </Link>
        <Link className={cx("link")} to={"/"}>
          Woman
        </Link>
        <Link className={cx("link")} to={"/"}>
          Kid
        </Link>
        <Link className={cx("link")} to={"/"}>
          Sprot
        </Link>
      </nav>
    </>
  );
}

export default Header;
