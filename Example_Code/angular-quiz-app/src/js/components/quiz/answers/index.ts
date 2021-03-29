export * from './generic_answer';
export * from './answers';

import { importToArray } from 'app/helpers';
import * as answers from './answers';

const ANSWER_COMPONENTS = importToArray(answers);

export { ANSWER_COMPONENTS };
