import { create } from "zustand";

type QueryState = {
  query: string,
  setQuery: (input: string | undefined) => void
};

export const useQueryStore = create<QueryState>((set) => ({
  query: '',
  setQuery: (input: string | undefined) => set(() => ({
    query: input
  }))
}));