import React from "react";
import Link from 'next/link';

export default function NavPolicies() {
  return (
     <div class='policies-nav'>
       <h6>規約</h6>
       <div class="policies-nav-inner">
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
