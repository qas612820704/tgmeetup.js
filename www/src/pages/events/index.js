import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EventPage from './Event';
import EventsPage from './Events';

const EventRoute = () => (
  <Switch>
    <Route path='/events/:id' component={EventPage} />
    <Route path='/events' component={EventsPage} />
  </Switch>
)

export default EventRoute;