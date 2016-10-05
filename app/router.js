import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("app", function(){
    this.route("login", {path: "login"});
    this.route("register", {path: "register"});
  });
  this.route("url-not-defined", {path: "*path"});
});

export default Router;
