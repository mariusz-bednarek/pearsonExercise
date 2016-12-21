class HeaderController {

  changeExercise(index) {
    this.onExerciseChange({index});
  }
}

export const header = {
  templateUrl: 'app/components/header/header.html',
  controller: HeaderController,
  bindings: {
    exercises: '<',
    currentExercise: '<',
    onExerciseChange: '&'
  }
};
