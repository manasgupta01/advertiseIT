const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const history = require('connect-history-api-fallback'); 

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace 'mongodb://localhost/myblog' with your MongoDB connection string)
mongoose.connect('mongodb+srv://manasgupta7624:manasgupta7624@cluster0.9gjs3tc.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

app.use(history());

// Define the BlogPost schema and model
const blogPostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// Error-handling middleware (You can keep this at the end)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

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

// Serve your static files (if applicable) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Catch-all route that serves your main HTML file
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
