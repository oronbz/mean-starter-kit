var geeks = require('../controllers/geeks');

module.exports = function(app) {
	app.get('/api/geeks', geeks.list);
	app.post('/api/geeks', geeks.create);
	app.get('/api/geeks/:geek_id', geeks.geekById);	
	app.put('/api/geeks/:geek_id', geeks.update);
	app.delete('/api/geeks/:geek_id', geeks.delete);
};
