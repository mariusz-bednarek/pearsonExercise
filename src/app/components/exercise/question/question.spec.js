import angular from 'angular';
import 'angular-mocks';
import {question} from './question';

describe('question component', () => {
  beforeEach(() => {
    angular
      .module('question', ['app/components/exercise/question/question.html'])
      .component('question', question);
    angular.mock.module('question');
  });

  let $rootScope, $compile, $componentController, dataBinding;
  beforeEach(angular.mock.inject((_$rootScope_, _$compile_, _$componentController_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $componentController = _$componentController_;
    dataBinding = {
      question: {img: "/images/exercise_1/Icon_graph.jpg", correctAnswer: "chart", key: "q4"},
      answers: [{key: "gauge", name: "Gauge"}, {key: "chart", name: "Chart"}],
      checked: false,
      mode: 'someMode'
    };
  }));

  it('component should be rendered', () => {
    const element = $compile('<question></question>')($rootScope);
    $rootScope.$digest();
    expect(element).not.toBeNull();
  });

  it('question should be defined', () => {
    const ctrl = $componentController('question', null, dataBinding);
    expect(ctrl.question).toBeDefined();
  });

  it('answers should be defined', () => {
    const ctrl = $componentController('question', null, dataBinding);
    expect(ctrl.answers).toBeDefined();
  });

  it('mode should be defined', () => {
    const ctrl = $componentController('question', null, dataBinding);
    expect(ctrl.mode).toBeDefined();
    expect(ctrl.mode).toBe('someMode');
  });

  it('should call onChangeAnswer', () => {
    dataBinding.onChangeAnswer = () => {};
    const ctrl = $componentController('question', null, dataBinding);
    spyOn(ctrl, 'onChangeAnswer');
    ctrl.changeAnswer({key: "gauge", name: "Gauge"});
    expect(ctrl.onChangeAnswer).toHaveBeenCalledWith({
      question: {img: "/images/exercise_1/Icon_graph.jpg", correctAnswer: "chart", key: "q4", answer: {key: "gauge", name: "Gauge"}}
    });
  });

  describe('dropdownLabel', () => {
    it('should be "Select a label"', () => {
      const ctrl = $componentController('question', null, dataBinding);
      expect(ctrl.dropdownLabel).toBe('Select a label');
    });

    it('should be "Select some answer"', () => {
      dataBinding.checked = true;
      const ctrl = $componentController('question', null, dataBinding);
      ctrl.getDropdownLabel();
      expect(ctrl.dropdownLabel).toBe('Select some answer');
    });

    it('should be Gauge', () => {
      dataBinding.onChangeAnswer = () => {};
      const ctrl = $componentController('question', null, dataBinding);
      spyOn(ctrl, 'onChangeAnswer');
      ctrl.changeAnswer({key: "gauge", name: "Gauge"});
      expect(ctrl.dropdownLabel).toBe('Gauge');
    });
  });

  describe('dropdownClass', () => {
    it('should be "btn-default"', () => {
      const ctrl = $componentController('question', null, dataBinding);
      expect(ctrl.dropdownClass).toBe('btn-default');
    });

    it('should be "btn-warning"', () => {
      dataBinding.checked = true;
      const ctrl = $componentController('question', null, dataBinding);
      ctrl.getDropdownClass();
      expect(ctrl.dropdownClass).toBe('btn-warning');
    });

    it('should be "btn-danger"', () => {
      dataBinding.checked = true;
      dataBinding.question.answer = {key: "gauge", name: "Gauge"};
      const ctrl = $componentController('question', null, dataBinding);
      ctrl.getDropdownClass();
      expect(ctrl.dropdownClass).toBe('btn-danger');
    });

    it('should be "btn-success"', () => {
      dataBinding.checked = true;
      dataBinding.question.answer = {key: "chart", name: "Chart"};
      const ctrl = $componentController('question', null, dataBinding);
      ctrl.getDropdownClass();
      expect(ctrl.dropdownClass).toBe('btn-success');
    });
  });
});
