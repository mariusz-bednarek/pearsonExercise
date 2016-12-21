import angular from 'angular';
import 'angular-mocks';
import {exercise} from './exercise';
import {exercises} from '../../services/exercises_data';

describe('exercise component', () => {
  beforeEach(() => {
    angular
      .module('exercise', ['app/components/exercise/exercise.html'])
      .component('exercise', exercise);
    angular.mock.module('exercise');
  });

  let $rootScope, $compile, $componentController, dataBinding;
  beforeEach(angular.mock.inject((_$rootScope_, _$compile_, _$componentController_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $componentController = _$componentController_;
    dataBinding = {
      exercise: exercises[0],
      index: 0,
      count: 2
    };
  }));

  it('component should be rendered', () => {
    const element = $compile('<exercise></exercise>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  });

  it('exercise should be defined', () => {
    const ctrl = $componentController('exercise', null, dataBinding);
    expect(ctrl.exercise).toBeDefined();
  });

  it('index should be 0', () => {
    const ctrl = $componentController('exercise', null, dataBinding);
    expect(ctrl.index).toBe(0);
  });

  it('count should be 2', () => {
    const ctrl = $componentController('exercise', null, dataBinding);
    expect(ctrl.count).toBe(2);
  });

  it('should call onNext', () => {
    dataBinding.onNext = () => {};
    const ctrl = $componentController('exercise', null, dataBinding);
    spyOn(ctrl, 'onNext');
    ctrl.$onChanges();
    ctrl.next();
    expect(ctrl.onNext).toHaveBeenCalled();
  });

  it('should not call onNext', () => {
    dataBinding.onNext = () => {};
    dataBinding.index = 1;
    const ctrl = $componentController('exercise', null, dataBinding);
    spyOn(ctrl, 'onNext');
    ctrl.$onChanges();
    ctrl.next();
    expect(ctrl.onNext).not.toHaveBeenCalled();
  });

  it('should not call onPrev', () => {
    dataBinding.onPrev = () => {};
    const ctrl = $componentController('exercise', null, dataBinding);
    spyOn(ctrl, 'onPrev');
    ctrl.$onChanges();
    ctrl.prev();
    expect(ctrl.onPrev).not.toHaveBeenCalled();
  });

  it('should call onPrev', () => {
    dataBinding.onPrev = () => {};
    dataBinding.index = 1;
    const ctrl = $componentController('exercise', null, dataBinding);
    spyOn(ctrl, 'onPrev');
    ctrl.$onChanges();
    ctrl.prev();
    expect(ctrl.onPrev).toHaveBeenCalled();
  });

  it('should call onCheckAnswers', () => {
    dataBinding.onCheckAnswers = () => {};
    const ctrl = $componentController('exercise', null, dataBinding);
    spyOn(ctrl, 'onCheckAnswers');
    ctrl.checkAnswers();
    expect(ctrl.onCheckAnswers).toHaveBeenCalledWith({
      exercise: ctrl.exercise
    });
  });

  it('should call onResetAnswers', () => {
    dataBinding.onResetAnswers = () => {};
    const ctrl = $componentController('exercise', null, dataBinding);
    spyOn(ctrl, 'onResetAnswers');
    ctrl.resetAnswers();
    expect(ctrl.onResetAnswers).toHaveBeenCalledWith({
      exercise: ctrl.exercise
    });
  });

  it('should call onChangeAnswer', () => {
    dataBinding.onChangeAnswer = () => {};
    const ctrl = $componentController('exercise', null, dataBinding);
    spyOn(ctrl, 'onChangeAnswer');
    ctrl.handleChangeAnswer({name: "Question 1"});
    expect(ctrl.onChangeAnswer).toHaveBeenCalledWith({
      exercise: ctrl.exercise,
      question: {name: "Question 1"}
    });
  });
});
