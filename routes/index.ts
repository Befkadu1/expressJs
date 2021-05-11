const express = require('express')
import { locationRoute } from './location';
import {personRoute } from './person';
export const router = express();

// Import my test routes into the path '/test'
router.use('/persons', personRoute);
router.use('/location', locationRoute)

