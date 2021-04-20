import { Option } from './option';

export class Question {
    id: string;
    name: string;
    articleBody: string;
    articleUrl: string;
    questionTypeId: number;
    options: Option[];
    answered: boolean;
    num_correct: number;
    num_attempted: number;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.name = data.headline;
        this.articleBody = data.text_body;
        this.articleUrl = data.correct_answer_url;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
        this.num_correct = data.num_correct;
        this.num_attempted = data.num_attempted;
    }
}
