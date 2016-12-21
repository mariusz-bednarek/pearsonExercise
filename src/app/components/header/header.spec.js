import angular from 'angular';
import 'angular-mocks';
import {header} from './header';
import {exercises} from '../../services/exercises_data';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('header', ['app/components/header/header.html'])
      .component('header', header);
    angular.mock.module('header');
  });
  let $rootScope, $compile, $componentController, dataBinding;
  beforeEach(angular.mock.inject((_$rootScope_, _$compile_, _$componentController_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $componentController = _$componentController_;
    dataBinding = {
      exercises,
      currentExercise: exercises[0]
    };
  }));

  it('component should be rendered', () => {
    const element = $compile('<header></header>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  });

  it('exercises should be defined', () => {
    const ctrl = $componentController('header', null, dataBinding);
    expect(ctrl.exercises).toBeDefined();
  });

  it('currentExercise should be defined', () => {
    const ctrl = $componentController('header', null, dataBinding);
    expect(ctrl.currentExercise).toBeDefined();
  });

  it('should call onExerciseChange', () => {
    dataBinding.onExerciseChange = () => {};
    const ctrl = $componentController('header', null, dataBinding);
    spyOn(ctrl, 'onExerciseChange');
    ctrl.changeExercise(1);
    expect(ctrl.onExerciseChange).toHaveBeenCalledWith({
      index: 1
    });
  });
});
