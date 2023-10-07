import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Blog() {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function for fetching blog posts
    async function fetchBlogPosts() {
      try {
        const response = await axios.get('/api/blog-posts');
        if (!response.data || response.data.length === 0) {
          throw new Error('No data received');
        }
        setBlogData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error);
        setError(error);
        setIsLoading(false);
      }
    }

    // Call the async function to fetch blog posts
    fetchBlogPosts();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading indicator while fetching data
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message if there's an error
  }

  return (
    <div className='blog-container'>
      {blogData.map((post, index) => (
        <div key={index} className='blog-post'>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blog;
