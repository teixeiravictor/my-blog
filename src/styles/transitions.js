const defaultTiming = "0.3s ease-in-out";
const colorTransition = `color ${defaultTiming}`;
const transformTransition = `transform ${defaultTiming}`;

const transitions = {
  TRANSFORM: transformTransition,
  COLOR: colorTransition,
  ALL: defaultTiming,
};

export default transitions;
