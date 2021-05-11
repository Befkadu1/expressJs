var express = require('express')

export const personRoute = express.Router();

// a middleware sub-stack that handles GET requests to the /user/:id path
personRoute.get('/', function (req: any, res: any) {
  res.send({ express: 'PERSONS FROM THE BACKEND' });
})

// a middleware sub-stack that handles GET requests to the /user/:id path
personRoute.get('/:id', function (req: any, res: any) {
    console.log(req.params)
    res.send({ express: 'PERSONS Person ID = ' + req.params.id});
  })
