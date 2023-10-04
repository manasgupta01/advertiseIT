import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [blogData, setBlogData] = useState({ title: '', content: '' });

  useEffect(() => {
    axios
      .get('/api/blog-posts')
      .then((response) => {
        if (!response.data || response.data.length === 0) {
          throw new Error('No data received');
        }
        // Assuming data is an array with at least one item
        const firstPost = response.data[0];
        setBlogData({ title: firstPost.title, content: firstPost.content });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='blog-container'>
      <h1>{blogData.title}</h1>
      <p>{blogData.content}</p>
    </div>
  );
}

export default Blog;
