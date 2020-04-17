import Link from 'next/link';
import Search from "../../assets/icons/ui/search.js";

const NavSearch = () => (
      <div className='contents bg-black'>
        <div className='section center-section'>
          <div className="search-wrapper faq-search">
            <span className="search-icon">
              <span className="search-icon-inner"><Search/></span>
            </span>
            <input className="search" type="search" name="q" placeholder="お困りのキーワードで検索..."/>
          </div>
        </div>
      </div>
)

export default NavSearch
