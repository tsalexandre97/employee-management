import express from 'express'
const app = express();
import {event} from './api/routes/event.js'

app.use('/', event)

export {app}