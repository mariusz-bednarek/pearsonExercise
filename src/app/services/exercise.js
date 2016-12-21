import {exercises} from './exercises_data';
export class ExerciseService {

  getExercises() {
    return exercises;
  }

  updateAnswer(exercise, question) {
    const index = exercise.questions.findIndex(q => {
      return q.key === question.key;
    });
    exercise.questions[index] = question;
  }

  checkAnswers(exercise) {
    exercise.checked = true;
  }

  resetAnswers(exercise) {
    exercise.questions.forEach(question => {
      delete question.answer;
    });
    exercise.checked = false;
  }
}
