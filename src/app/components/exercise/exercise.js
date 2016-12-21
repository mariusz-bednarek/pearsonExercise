class ExerciseController {
  constructor() {
    this.nextDisabled = true;
    this.prevDisabled = true;
  }

  $onChanges() {
    this.prevDisabled = (this.index === 0);
    this.nextDisabled = (this.index === (this.count - 1));
  }

  next() {
    if (!this.nextDisabled) {
      this.onNext();
    }
  }

  prev() {
    if (!this.prevDisabled) {
      this.onPrev();
    }
  }

  checkAnswers() {
    this.onCheckAnswers({exercise: this.exercise});
  }

  resetAnswers() {
    this.onResetAnswers({exercise: this.exercise});
  }

  handleChangeAnswer(question) {
    this.onChangeAnswer({
      exercise: this.exercise,
      question
    });
  }
}

export const exercise = {
  templateUrl: 'app/components/exercise/exercise.html',
  controller: ExerciseController,
  bindings: {
    exercise: '<',
    index: '<',
    count: '<',
    onNext: '&',
    onPrev: '&',
    onChangeAnswer: '&',
    onCheckAnswers: '&',
    onResetAnswers: '&'
  }
};
