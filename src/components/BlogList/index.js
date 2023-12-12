// Write your JS code here
import './index.css'
import {Component} from 'react'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  render() {
    const {blogDetails} = this.props
    return (
      <ul className="blog-con">
        {blogDetails.map(each => (
          <BlogItem key={each.id} blogDetails={each} />
        ))}
      </ul>
    )
  }
}
export default BlogList
