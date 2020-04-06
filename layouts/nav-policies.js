import React from "react";
import Link from 'next/link';

export default function NavPolicies() {
  return (
     <div class='side-nav-desktop'>
       <div class="side-nav-desktop-inner">
         <h6 class="xs-text">規約</h6>
       <Link href="/privacy">
               <a class="xs-text hover-accent grey">プライバシーポリシー</a>
           </Link>

           <Link href="/terms">
                   <a class="xs-text hover-accent grey">利用規約</a>
               </Link>

                 </div>
     </div>
  );
}
