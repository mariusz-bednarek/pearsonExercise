import angular from 'angular';
import 'angular-mocks';
import {main} from './main';
import {ExerciseService} from '../../services/exercise';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('main', ['app/components/main/main.html'])
      .service('exerciseService', ExerciseService)
      .component('main', main);
    angular.mock.module('main');
  });

  let $rootScope, $compile, $componentController;
  beforeEach(angular.mock.inject((_$rootScope_, _$compile_, _$componentController_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $componentController = _$componentController_;
  }));

  it('component should be rendered', () => {
    const element = $compile('<main></main>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  });

  it('index should be 0', () => {
    const ctrl = $componentController('main');
    expect(ctrl.index).toBe(0);
  });

  it('exercises should be defined', () => {
    const ctrl = $componentController('main');
    expect(ctrl.exercises).toBeDefined();
  });

  it('should call updateAnswer', () => {
    const ctrl = $componentController('main');
    spyOn(ctrl.exerciseService, 'updateAnswer');
    ctrl.handlehangeAnswer();
    expect(ctrl.exerciseService.updateAnswer).toHaveBeenCalled();
  });

  it('should call resetAnswers', () => {
    const ctrl = $componentController('main');
    spyOn(ctrl.exerciseService, 'resetAnswers');
    ctrl.handleResetAnswers();
    expect(ctrl.exerciseService.resetAnswers).toHaveBeenCalled();
  });

  it('should call checkAnswers', () => {
    const ctrl = $componentController('main');
    spyOn(ctrl.exerciseService, 'checkAnswers');
    ctrl.handleCheckAnswers();
    expect(ctrl.exerciseService.checkAnswers).toHaveBeenCalled();
  });
});
