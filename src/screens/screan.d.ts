export type Navigation = {
  navigation: {
    push: (path: string) => void;
    navigate: (path: string) => void;
    goBack: () => void;
    popToTop: () => void;
  };
};
