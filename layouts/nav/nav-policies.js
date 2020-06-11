import React from "react";
import Link from "next/link";
import Down from "../../assets/icons/ui/down.js";
import $ from "jquery";

$(function () {
  $(".side-nav-desktop a").each(function () {
    var $href = $(this).attr("href");
    if (location.href.match($href)) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });
});

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

      <style jsx>{`
        .side-nav-desktop a.active {
          color: var(--black);
          border-color: var(--black);
        }
      `}</style>
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
