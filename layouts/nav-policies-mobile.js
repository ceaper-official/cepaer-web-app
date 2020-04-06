import React from "react";
import Link from 'next/link';
import Down from "../assets/icons/ui/down.js";

export default function NavPoliciesMobile() {
  return (
    <div class="side-nav-mobile">
      <input id="side-nav-check" class="side-nav-label-check" type="checkbox"/>
      <label class="side-nav-label ico xs-text" for="side-nav-check">規約<Down/></label>
      <div class="side-nav-mobile-inner">
        <Link href="/privacy">
                <a class="xs-text">プライバシーポリシー</a>
            </Link>
            <Link href="/terms">
                    <a class="xs-text">利用規約</a>
                </Link>
      </div>
    </div>
  );
}
