// src/types/blog.ts
export type TBlogPost = {
	title: string
	slug: string
	date: string
	imgSrc: string
	mobileImgSrc: string
	description: string
	tags?: string[]
	category?: string
}
