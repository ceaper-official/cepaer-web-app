import React from "react";
import Link from "next/link";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import HeroText from "@components/hero/HeroText";
import SideNav from "@components/nav/SideNav";
import SideNavItem from "@components/nav/SideNavItem";

export default () => (
  <BaseLayout>
    <Column sidenav>
      <SideNav>
        <SideNavItem
         title="プライバシーポリシー"
         href="/privacy"
        />
        <SideNavItem
         title="利用規約"
         href="/terms"
        />
      </SideNav>
      <div>
        <HeroText title="利用規約">
          <p>最終更新日：2020.4.20</p>
        </HeroText>
      </div>
    </Column>
  </BaseLayout>
);
