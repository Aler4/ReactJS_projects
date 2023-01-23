import {TState} from "./reducer";

export const questionsSelector = (state: TState) => {
   let  res = state.questions.length > 0 ? (state.questions.sort(() => Math.random() - 0.5)).splice(0, state.questions.length / 5)
       : state.questions;
    return res.sort(() => Math.random() - 0.5);
}
