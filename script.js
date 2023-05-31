const express = require("express");
const { posts, comments } = require("./data");
const app = express();
app.use(express.json());

//  GET POSTS
app.get("/api/posts/", (req, res) => {
  res.json(posts);
});

// GET BY ID
app.get("/api/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((p) => p.id == id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

// POST
app.post("/api/posts/", (req, res) => {
  const { id, title, body, likeCount } = req.body;
  const newPost = { id, title, body, likeCount };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// PUT
app.put("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, body, likeCount } = req.body;
  const post = posts.find((p) => p.id === postId);
  if (post) {
    post.title = title;
    post.body = body;
    post.likeCount = likeCount;
    res.json(post);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

// DELETE
app.delete("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === postId);
  //   products = products.filter((q) => q.id != postId);
  if (index !== -1) {
    posts.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

// GET COMMENTS
app.get("/api/comments", (req, res) => {
  res.json(comments);
});

// GET - Get comments by username
app.get("/api/comments", (req, res) => {
  const { username } = req.query;
  const userComments = comments.filter(
    (comment) => comment.username === username
  );
  res.json(userComments);
});

// GET - Get comments of a specific post by post ID
app.get("/api/posts/:id/comments", (req, res) => {
  const postId = parseInt(req.params.id);
  const postComments = comments.filter((c) => c.postId === postId);
  res.json(postComments);
});

app.listen(8080, () => {
  console.log("Server is running on port 8080....");
});
