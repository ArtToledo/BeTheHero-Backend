const express = require('express');

const OngsController = require('./Controllers/OngsController');
const IncidentsController = require('./Controllers/IncidentsController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;