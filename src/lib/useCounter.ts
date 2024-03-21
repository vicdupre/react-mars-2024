import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounter = create<CounterState>()(
  persist(
    immer((set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () =>
        set((state) => {
          state.count -= 1;
        }),
    })),
    { name: "counter" }
  )
);

export default useCounter;
