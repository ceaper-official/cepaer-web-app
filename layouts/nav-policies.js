import React from "react";
import Link from 'next/link';

export default function NavPolicies() {
  return (
     <div className='side-nav-desktop'>
       <div className="side-nav-desktop-inner">
         <h6 className="xs-text">規約</h6>
       <Link href="/privacy">
               <a className="xs-text hover-accent grey">プライバシーポリシー</a>
           </Link>

           <Link href="/terms">
                   <a className="xs-text hover-accent grey">利用規約</a>
               </Link>

                 </div>
     </div>
  );
}
