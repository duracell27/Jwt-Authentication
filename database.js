const users = [
  {
    email: "john@gmail.com",
    password: "random",
  },
  {
    email: "shmidt@gmail.com",
    password: "$2b$10$z6sy1BRK1PWXkVoe1tlS0.kQQBo4rdZw1y/Zoil9klg7TZdJuC3ai",
  },
  
];

const publicPosts = [
  {
    title: "Post 1",
    content: "Post 1 is free",
  },
  {
    title: "Post 2",
    content: "Post 2 is free",
  },
  {
    title: "Post 3",
    content: "Post 3 is free",
  },
  {
    title: "Post 4",
    content: "Post 4 is free",
  },
];

const privatePosts = [
  {
    title: "Post 3",
    content: "Post 3 is private",
  },
];

module.exports = { users, publicPosts, privatePosts };
