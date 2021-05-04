export class Option {
    id: number;
    questionId: number;
    name: string;
    isAnswer: boolean;
    selected: boolean;

    constructor(data: any) {

        data = data || {};
        this.id = data.id;
        this.questionId = data.id;
        this.name = data.name;
        this.isAnswer = data.isCorrectAnswer;
        this.selected = data.selected;
    }
}
