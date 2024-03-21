const createIncrement = (by = 1) => ({ type: "INCREMENT", payload: by });
const createDecrement = (by = 1) => ({ type: "DECREMENT", payload: by });

export { createDecrement, createIncrement };
