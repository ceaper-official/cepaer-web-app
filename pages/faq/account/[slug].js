import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import BaseLayout from "../../../layouts/base.js";
import NavFAQ from "../../../layouts/faq/nav-faq.js";
import VoteForm from "../../../layouts/faq/vote-form.js";
import NavSearch from "../../../layouts/faq/nav-search.js";

export default function FaqTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  return (
    <BaseLayout>
      <div id="page" className="side-nav-page">
        <NavSearch />

        <div className="contents">
          <div className="section faq-wrapper">
            <NavFAQ />

            <div className="faq-inner article">
              <h1>{frontmatter.title}</h1>

              <ReactMarkdown source={content} />
              <VoteForm />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

FaqTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  // Import our .md file using the `slug` from the URL
  const faq = await import(`../../../faq/account/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(faq.default);

  // Pass data to the component props
  return { ...data };
};
