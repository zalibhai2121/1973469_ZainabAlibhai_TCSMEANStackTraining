import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../question';
import { Quiz } from '../quiz';
import { QuizService } from '../quiz.service';
import { Option } from '../option';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private quizService: QuizService, private router: Router) {}
  // quizes: any = [];
  quiz: Quiz = new Quiz(this.quizService.get('javascript'));
  mode = 'quiz';


  ngOnInit(): void {
  }

  onSelect(question: Question, option: Option): void {
    if (question.questionTypeId === 1) {
      question.options.forEach(x => {
        if (x.id !== option.id) { x.selected = false; }
      });
    }
  }


  // tslint:disable-next-line:typedef
  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }

  onSubmit(): void {
    const answers = [];
    this.quiz.questions.forEach(x =>
      answers.push({
        quizId: this.quiz.id,
        questionId: x.id,
        answered: x.answered
      })
    );

    // Post your data to the server here. answers contains the questionId and the users' answer.
    this.mode = 'result';
  }
}
