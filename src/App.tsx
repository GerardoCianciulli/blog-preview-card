import BlogPreviewCard from './components/BlogPreviewCard.tsx'
import illustration from '../assets/images/illustration-article.svg'
import avatar from '../assets/images/image-avatar.webp'

function App() {
  return (
    <main>
      <h1 className="visually-hidden">Blog preview card</h1>
      <BlogPreviewCard
        image={illustration}
        category="Learning"
        publishedDate="2023-12-21"
        title="HTML & CSS foundations"
        href="#"
        description="These languages are the backbone of every website, defining structure, content, and presentation."
        author={{ name: 'Greg Hooper', avatar }}
      />
    </main>
  )
}

export default App
