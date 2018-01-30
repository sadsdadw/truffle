import { createSelector } from "reselect";
import { createNestedSelector } from "../selectors";

const traceStep = (state) => state.trace.steps[state.trace.index];

const stepsRemaining = (state) =>
  state.trace.steps.length - state.trace.index;

const steps = (state) => [...state.trace.steps];

const index = (state) => state.trace.index;

let selector = createNestedSelector({
  index,
  steps,
  stepsRemaining,
  step: traceStep,
});

export default selector;
