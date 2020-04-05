import React from 'react';
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import { useLocalMarkdownForm } from 'next-tinacms-markdown'
import Link from 'next/link';
import BaseLayout from '../../layouts/base.js'

export default function helpTemplate(props) {
	const formOptions = {
		fields: [
			{
				label: 'Hero Image',
				name: 'frontmatter.hero_image',
				component: 'image',
				// Generate the frontmatter value based on the filename
				parse: filename => `../static/${filename}`,

				// Decide the file upload directory for the post
				uploadDir: () => '/src/public/static/',

				// Generate the src attribute for the preview image.
				previewSrc: data => `/static/${data.frontmatter.hero_image}`
			},
			{
				name: 'frontmatter.title',
				label: 'Title',
				component: 'text'
			},
			{
				name: 'frontmatter.date',
				label: 'Date',
				component: 'date'
			},
			{
				name: 'frontmatter.author',
				label: 'Author',
				component: 'text'
			},
			{
				name: 'markdownBody',
				label: 'help Body',
				component: 'markdown'
			}
		]
	}

	const [post] = useLocalMarkdownForm(props.markdownFile, formOptions)

	function reformatDate(fullDate) {
		const date = new Date(fullDate)
		return date.toDateString().slice(4)
	}

	return (
		<BaseLayout siteTitle={props.title}>
			<article className='help'>
				<figure className='help__hero'>
					<img
						src={post.frontmatter.hero_image}
						alt={`help_hero_${post.frontmatter.title}`}
					/>
				</figure>
				<div className='help__info'>
					<h1>{post.frontmatter.title}</h1>
					<h3>{reformatDate(post.frontmatter.date)}</h3>
				</div>
				<div className='help__body'>
					<ReactMarkdown source={post.markdownBody} />
				</div>
				<h2 className='help__footer'>Written By: {post.frontmatter.author}</h2>
			</article>
			<style jsx>
				{`
					.help h1 {
						margin-bottom: 0.7rem;
					}

					.help__hero {
						min-height: 300px;
						height: 60vh;
						width: 100%;
						margin: 0;
						overflow: hidden;
					}
					.help__hero img {
						margin-bottom: 0;
						object-fit: cover;
						min-height: 100%;
						min-width: 100%;
						object-position: center;
					}

					.help__info {
						padding: 1.5rem 1.25rem;
						width: 100%;
						max-width: 768px;
						margin: 0 auto;
					}
					.help__info h1 {
						margin-bottom: 0.66rem;
					}
					.help__info h3 {
						margin-bottom: 0;
					}

					.help__body {
						width: 100%;
						padding: 0 1.25rem;
						margin: 0 auto;
						display: flex;
						flex-direction: column;
						justify-content: center;
					}
					.help__body a {
						padding-bottom: 1.5rem;
					}
					.help__body:last-child {
						margin-bottom: 0;
					}
					.help__body h1 h2 h3 h4 h5 h6 p {
						font-weight: normal;
					}
					.help__body p {
						color: inherit;
					}
					.help__body ul {
						list-style: initial;
					}
					.help__body ul ol {
						margin-left: 1.25rem;
						margin-bottom: 1.25rem;
						padding-left: 1.45rem;
					}

					.help__footer {
						display: flex;
						justify-content: space-between;
						align-items: center;
						padding: 1.5rem 1.25rem;
						width: 100%;
						max-width: 800px;
						margin: 0 auto;
					}
					.help__footer h2 {
						margin-bottom: 0;
					}
					.help__footer a {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
					.help__footer a svg {
						width: 20px;
					}

					@media (min-width: 768px) {
						.help {
							display: flex;
							flex-direction: column;
						}
						.help__body {
							max-width: 800px;
							padding: 0 2rem;
						}
						.help__body span {
							width: 100%;
							margin: 1.5rem auto;
						}
						.help__body ul ol {
							margin-left: 1.5rem;
							margin-bottom: 1.5rem;
						}
						.help__hero {
							min-height: 600px;
							height: 75vh;
						}
						.help__info {
							text-align: center;
							padding: 2rem 0;
						}
						.help__info h1 {
							max-width: 500px;
							margin: 0 auto 0.66rem auto;
						}
						.help__footer {
							padding: 2.25rem;
						}
					}

					@media (min-width: 1440px) {
						.help__hero {
							height: 70vh;
						}
						.help__info {
							padding: 3rem 0;
						}
						.help__footer {
							padding: 2rem 2rem 3rem 2rem;
						}
					}
				`}
			</style>
		</BaseLayout>
	)
}

helpTemplate.getInitialProps = async function(ctx) {
	const { slug } = ctx.query
	const content = await import(`../../posts/${slug}.md`)
	const config = await import(`../../data/config.json`)
	const data = matter(content.default)

	return {
		markdownFile: {
			fileRelativePath: `src/posts/${slug}.md`,
			frontmatter: data.data,
			markdownBody: data.content
		},
		title: config.default.title
	}
}
