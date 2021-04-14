import { Option } from './option';

export class Question {
    id: number;
    name: string;
    articleBody: string;
    articleUrl: string;
    questionTypeId: number;
    options: Option[];
    answered: boolean;

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
    }
}
