import { useObservable } from 'mobx-react';

const AppStore = () => {
  const store = useObservable({
    selectedMealId: null,
    selectedMealDetails: null,
    setSelectedMealId(id) {
      store.selectedMealId = id;
    },
    setSelectedMealDetails(details) {
      store.selectedMealDetails = details;
    },
  });

  return store;
};

export default AppStore;
