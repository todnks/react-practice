import express from 'express';
import apiV1Router from './src/router/apiV1Router/index.js';
import session from 'express-session';
const app = express();

app.use(express.json());
app.use(
  session({
    secret: 'secret123',
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/api/v1', apiV1Router);
app.get('/test', (req, res) => {
  console.log(req.session);
  res.json({
    test: 1324,
  });
});

app.listen(8080, () => {
  console.log('server-open');
});
