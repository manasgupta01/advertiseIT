const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'mongodb://localhost/myblog' with your MongoDB connection string)
mongoose.connect('mongodb+srv://manasgupta7624:manasgupta7624@cluster0.9gjs3tc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const BlogPost = mongoose.model('BlogPost', {
  title: String,
  content: String,
});

// Handle MongoDB connection events (as shown in the previous response)

// Define API endpoint to add a new blog post
app.post('/api/blog-posts', async (req, res) => {
  try {
    const { title, content } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required fields' });
    }

    const newBlogPost = new BlogPost({
      title,
      content,
    });

    await newBlogPost.save();
    res.status(201).json(newBlogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... (previous code)

// Define API endpoint to fetch all blog posts
app.get('/api/blog-posts', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ... (remaining code)


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
