import React from 'react';
import './BlogCard.css';



function BlogCard({ title, subtitle, thumbnail, date }) {
  return (
    <div className='blog-card'>
      <div style={{ backgroundImage: `url(${thumbnail})` }} className="blog-card-thumbnail" ></div>
      <div className='blog-card-info'>
        <h1 className='blog-card-title'>{title}</h1>
        <span className='blog-card-date'>{date}</span>
        <p className='blog-card-subtitle'>{subtitle}</p>
        <a target="_blank" rel="noreferrer" className='blog-card-btn' href="https://medium.com/@jfelipelayos/from-0-to-software-developer-job-my-story-95a30e6fd6f5">Read</a>
      </div>
    </div>
  );
}

export default BlogCard;
