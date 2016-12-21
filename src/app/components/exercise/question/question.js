class QuestionController {
  constructor() {
    this.dropdownLabel = 'Select a label';
    this.dropdownClass = 'btn-default';
  }
  changeAnswer(answer = null) {
    this.question.answer = answer;
    this.dropdownLabel = answer.name;
    this.onChangeAnswer({
      question: this.question
    });
  }

  $onChanges() {
    this.getDropdownClass();
    this.getDropdownLabel();
  }

  getDropdownClass() {
    if (this.checked) {
      if (angular.isUndefined(this.question.answer)) {
        this.dropdownClass = 'btn-warning';
      } else if (this.question.answer.key === this.question.correctAnswer) {
        this.dropdownClass = 'btn-success';
      } else {
        this.dropdownClass = 'btn-danger';
      }
    } else {
      this.dropdownClass = 'btn-default';
    }
  }

  getDropdownLabel() {
    if ('answer' in this.question) {
      this.dropdownLabel = this.question.answer.name;
    } else {
      this.dropdownLabel = this.checked ? 'Select some answer' : 'Select a label';
    }
  }

}

export const question = {
  templateUrl: 'app/components/exercise/question/question.html',
  controller: QuestionController,
  bindings: {
    question: '<',
    answers: '<',
    checked: '<',
    mode: '<',
    onChangeAnswer: '&'
  }
};
