import { create } from "zustand";

type sidebarStore = {
  sidebarIsOpen: boolean;
  toggleSidebarHandler: () => void;
};

export const useSidebarStore = create<sidebarStore>((set, get) => ({
  sidebarIsOpen: false,
  toggleSidebarHandler: () =>
    set((state) => ({ sidebarIsOpen: !state.sidebarIsOpen })),
}));
