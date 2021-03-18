export * from './generic_question';
export * from './question.component';
export * from './questions';
export * from './types';

import { importToArray } from 'app/helpers';
import * as questions from './questions';

const QUESTION_COMPONENTS = importToArray(questions);
const QUESTIONS_COMPONENTS_MAP = QUESTION_COMPONENTS.reduce<any>((result, value, index, array) => {
  result[value.type] = value;
  return result;
}, {});

export { QUESTION_COMPONENTS, QUESTIONS_COMPONENTS_MAP };
