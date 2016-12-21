import angular from 'angular';

import {main} from './app/components/main/main';
import {header} from './app/components/header/header';
import {footer} from './app/components/footer/footer';
import {exercise} from './app/components/exercise/exercise';
import {question} from './app/components/exercise/question/question';
import {ExerciseService} from './app/services/exercise';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import routesConfig from './routes';

import './scss/index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ui.bootstrap'])
  .config(routesConfig)
  .service('exerciseService', ExerciseService)
  .component('app', main)
  .component('header', header)
  .component('footer', footer)
  .component('exercise', exercise)
  .component('question', question);
