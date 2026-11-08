import './BlogPreviewCard.css'

export type Author = {
  name: string
  avatar: string
}

export type BlogPreviewCardProps = {
  image: string
  category: string
  /** ISO date, e.g. "2023-12-21" */
  publishedDate: string
  title: string
  href: string
  description: string
  author: Author
}

const dateFormatter = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

function BlogPreviewCard({
  image,
  category,
  publishedDate,
  title,
  href,
  description,
  author,
}: BlogPreviewCardProps) {
  return (
    <article className="blog-card">
      <img className="blog-card__image" src={image} alt="" width={336} height={200} />

      <div className="blog-card__content">
        <p className="blog-card__category">{category}</p>
        <p className="blog-card__date">
          Published <time dateTime={publishedDate}>{dateFormatter.format(new Date(publishedDate))}</time>
        </p>
        <h2 className="blog-card__title">
          <a className="blog-card__link" href={href}>
            {title}
          </a>
        </h2>
        <p className="blog-card__description">{description}</p>
      </div>

      <footer className="blog-card__author">
        <img className="blog-card__avatar" src={author.avatar} alt="" width={32} height={32} />
        <p className="blog-card__author-name">{author.name}</p>
      </footer>
    </article>
  )
}

export default BlogPreviewCard
