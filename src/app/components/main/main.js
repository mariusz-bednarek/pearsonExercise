class MainController {
  constructor(exerciseService) {
    this.exerciseService = exerciseService;
    this.exercises = exerciseService.getExercises();
    this.index = 0;
  }

  handleChangeExercise(index) {
    this.index = index;
  }

  handleNext() {
    this.index += 1;
  }

  handlePrev() {
    this.index -= 1;
  }

  handlehangeAnswer(exercise, question) {
    this.exerciseService.updateAnswer(exercise, question);
  }

  handleCheckAnswers(exercise) {
    this.exerciseService.checkAnswers(exercise);
  }

  handleResetAnswers(exercise) {
    this.exerciseService.resetAnswers(exercise);
  }
}

export const main = {
  templateUrl: 'app/components/main/main.html',
  controller: MainController
};
