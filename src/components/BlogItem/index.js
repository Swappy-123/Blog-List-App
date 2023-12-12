// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="blog-bg">
      <div className="first">
        <h1 className="blog-head">{title}</h1>
        <p className="blog-date">{publishedDate}</p>
      </div>
      <p className="blog-para">{description}</p>
      <hr className="hori" />
    </li>
  )
}

export default BlogItem
