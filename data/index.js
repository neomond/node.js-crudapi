let posts = [
  {
    id: 1,
    title: "Condiments",
    body: "Sweet and savory sauces relishes spreads and seasonings",
    likeCount: 1,
  },
  {
    id: 2,
    title: "Beverages",
    body: "Soft drinks coffees teas beers and ales",
    likeCount: 2,
  },
  {
    id: 3,
    title: "Confections",
    body: "Desserts candies and sweet breads",
    likeCount: 3,
  },
];

let comments = [
  {
    id: 1,
    postId: 1,
    username: "nazrin",
    content: "Sweet and savory sauces relishes spreads and seasonings",
  },
  {
    id: 2,
    postId: 2,
    username: "nini",
    content: "Soft drinks coffees teas beers and ales",
  },
  {
    id: 3,
    postId: 3,
    username: "nita",
    content: "Desserts candies and sweet breads",
  },
];

module.exports = { posts, comments };
