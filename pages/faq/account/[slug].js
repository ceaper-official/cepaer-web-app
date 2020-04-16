import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import BaseLayout from '../../../layouts/base.js'
import  NavFAQMobile from "../../../layouts/nav-faq-mobile.js";
import  NavFAQ from "../../../layouts/nav-faq.js";
import Search from "../../../assets/icons/ui/search.js";
import VoteForm from "../../../layouts/vote-form.js";


export default function FaqTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data

  return (
    <BaseLayout>
      <div id="page"className="side-nav-page">

        <div className = 'contents bg-grey'> <div className='section center-section'>
          <div className="search-wrapper faq-search">
            <span className="search-icon">
              <span className="search-icon-inner"><Search/></span>
            </span>
            <input className="search" type="search" name="q" placeholder="お困りのキーワードで検索"/>
          </div>
        </div>
        </div>

        <div className='contents'>
        <div className='section faq-wrapper'>

   <NavFAQ/>
     <NavFAQMobile/>

       <div className="faq-inner article">
      <h1>{frontmatter.title}</h1>

      <ReactMarkdown source={content} />
        <VoteForm/>
      </div>

    </div>
  </div>

</div>
  </BaseLayout>
  )
}

FaqTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  // Import our .md file using the `slug` from the URL
  const faq = await import(`../../../faq/account/${slug}.md`)

  // Parse .md data through `matter`
  const data = matter(faq.default)

  // Pass data to the component props
  return { ...data }
}
