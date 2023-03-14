import express from 'express';

const router = express.Router();

function routes(entries) {
  router.get('/', (req, res) => {
    res.render('index', { entries });
  });

  router.get('/entry/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const entry = entries[id];
    res.render('entry', { entry });
  });

  router.post('/add-entry', (req, res) => {
    const { title, content } = req.body;
    const entry = { title, content };
    entries.push(entry);
    res.redirect('/');
  });

  return router;
}

export default routes;
