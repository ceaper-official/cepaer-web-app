import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import BaseLayout from "@components/layout/BaseLayout";
import Column from "@components/column/Column";
import Container from "@components/container/Container";
import HeroText from "@components/hero/HeroText";
import VoteForm from "@components/support/VoteForm";

import Nav from "../Nav";

export default function FaqTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data;

  return (
    <BaseLayout article>
      <Column sidenav>
        <Nav/>
        <div>
          <HeroText small={frontmatter.title}>
          </HeroText>
          <Container>
          <ReactMarkdown source={content} />
          <VoteForm />
          </Container>
        </div>
      </Column>
    </BaseLayout>
  );
}

FaqTemplate.getInitialProps = async (context) => {
  const { slug } = context.query;
  // Import our .md file using the `slug` from the URL
  const faq = await import(`@src/article/faq/account/${slug}.md`);

  // Parse .md data through `matter`
  const data = matter(faq.default);

  // Pass data to the component props
  return { ...data };
};
