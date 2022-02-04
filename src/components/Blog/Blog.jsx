import React from 'react';
import './Blog.css';
import BlogCard from './BlogCard/BlogCard'
import { blogpostsInfo } from './blogpostsInfo';
import shortid from 'shortid';


function Blog() {
  (() => {
    document.title = 'Felipe Layos - Blog'
  })()
  return (
    <div className='blog-section'>
      {
        blogpostsInfo.map((element) => (
          <BlogCard
            title={element.title}
            subtitle={element.subtitle}
            date={element.date}
            thumbnail={element.thumbnail}
            key={shortid.generate()}
          />
        )
        )
      }
    </div>
  );
}

export default Blog;
