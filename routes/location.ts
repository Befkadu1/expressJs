var express = require('express')

export const locationRoute = express.Router();

// a middleware sub-stack that handles GET requests to the /user/:id path
locationRoute.get('/', function (req: any, res: any) {
  res.send({ express: 'LOCATION FROM THE BACKEND' });
})

// a middleware sub-stack that handles GET requests to the /user/:id path
locationRoute.get('/:id', function (req: any, res: any) {
    console.log(req.params)
    res.send({ express: 'LOCATION ID = ' + req.params.id});
  })
