import express from 'express';

const app = express();

app.listen({ port: 3000 }, () => {
  console.log("server it's work");
});
