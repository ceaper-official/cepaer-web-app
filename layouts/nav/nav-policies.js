import React from "react";
import Link from "next/link";
import Down from "../../assets/icons/ui/down.js";

export default function NavPolicies() {
  return (
    <div>
      <div className="side-nav-desktop">
        <div className="side-nav-desktop-inner">
          <Link href="/privacy">
            <a className="xs-text grey">プライバシーポリシー</a>
          </Link>
          <Link href="/terms">
            <a className="xs-text grey">利用規約</a>
          </Link>
        </div>
      </div>
      <NavPoliciesMobile />
    </div>
  );
}

function NavPoliciesMobile() {
  return (
    <div className="side-nav-mobile">
      <input
        id="side-nav-check"
        className="side-nav-label-check"
        type="checkbox"
      />
      <label className="side-nav-label ico xs-text" for="side-nav-check">
        規約
        <Down />
      </label>
      <div className="side-nav-mobile-inner">
        <Link href="/privacy">
          <a className="xs-text">プライバシーポリシー</a>
        </Link>
        <Link href="/terms">
          <a className="xs-text">利用規約</a>
        </Link>
      </div>
    </div>
  );
}
