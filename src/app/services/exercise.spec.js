import angular from 'angular';
import 'angular-mocks';
import {ExerciseService} from './exercise';

describe('ExerciseService service', () => {
  beforeEach(() => {
    angular
      .module('ExerciseService', [])
      .service('exerciseService', ExerciseService);
    angular.mock.module('ExerciseService');
  });

  let exerciseService, exercise;
  beforeEach(angular.mock.inject(_exerciseService_ => {
    exerciseService = _exerciseService_;
    exercise = {
      name: "Exercise 1",
      key: "ex1",
      questions: [
        {img: "q1.jpg", correctAnswer: "q1", key: "q1"},
        {img: "q2.jpg", correctAnswer: "q2", key: "q2"},
        {img: "q2.jpg", correctAnswer: "q3", key: "q3"}
      ]
    };
  }));

  it('should get two exercises', () => {
    expect(exerciseService.getExercises().length).toEqual(2);
  });

  it('answer should added to exercise', () => {
    const question = {img: "q2.jpg", correctAnswer: "q2", key: "q2", answer: {key: "gauge", name: "Gauge"}};
    exerciseService.updateAnswer(exercise, question);
    expect(exercise.questions[1].answer).toBeDefined();
    expect(exercise.questions[1].answer).toEqual({key: "gauge", name: "Gauge"});
  });

  it('exercise should be checked', () => {
    exerciseService.checkAnswers(exercise);
    expect(exercise.checked).toBe(true);
  });

  it('resetAnswers should clear answers', () => {
    const question = {img: "q2.jpg", correctAnswer: "q2", key: "q2", answer: {key: "gauge", name: "Gauge"}};
    exerciseService.updateAnswer(exercise, question);
    exerciseService.checkAnswers(exercise);
    exerciseService.resetAnswers(exercise);
    expect(exercise.checked).toBe(false);
    exercise.questions.forEach(q => {
      expect(q.answer).not.toBeDefined();
    });
  });
});
