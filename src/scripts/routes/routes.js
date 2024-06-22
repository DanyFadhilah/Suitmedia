import Ideas from '../views/pages/ideas';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';
import notFound from '../views/pages/404';

const routes = {
  '/': Ideas,
  '/ideas': Ideas,
  '/detail/:id': Detail,
  '/favorite': Like,
  '/404': notFound,
};

export default routes;
