export const exercises = [
  {
    name: "Exercise 1",
    key: "ex1",
    mode: "answersBottom",
    questions: [
      {img: "/images/exercise_1/Icon_globe2.jpg", correctAnswer: "globe", key: "q1"},
      {img: "/images/exercise_1/Icon_book.jpg", correctAnswer: "book", key: "q2"},
      {img: "/images/exercise_1/Icon_share.jpg", correctAnswer: "share", key: "q3"},
      {img: "/images/exercise_1/Icon_graph.jpg", correctAnswer: "chart", key: "q4"},
      {img: "/images/exercise_1/Icon_speechBubble2.jpg", correctAnswer: "conversation", key: "q5"},
      {img: "/images/exercise_1/Icon_gauge.jpg", correctAnswer: "gauge", key: "q6"}
    ],
    answers: [
      {key: "gauge", name: "Gauge"},
      {key: "chart", name: "Chart"},
      {key: "globe", name: "Globe"},
      {key: "share", name: "Share"},
      {key: "book", name: "Book"},
      {key: "conversation", name: "Conversation"}
    ]
  },
  {
    name: "Exercise 2",
    key: "ex2",
    mode: "answersTop",
    questions: [
      {img: "/images/exercise_2/PE_Bringing_learning_to_life.jpg", correctAnswer: "bringing_learning_to_life", key: "q7"},
      {img: "/images/exercise_2/PE_Reach_a_common_standard.jpg", correctAnswer: "establish_a_common_standard", key: "q8"},
      {img: "/images/exercise_2/Time_talent_spoke_for_itself.jpg", correctAnswer: "let_talent_speak_to_itself", key: "q9"}
    ],
    answers: [
      {key: "bringing_learning_to_life", name: "Bringing learning to life"},
      {key: "establish_a_common_standard", name: "Establish a common standard"},
      {key: "let_talent_speak_to_itself", name: "Let talent speak to itself"}
    ]
  }
];
