export type FilterCarsProps = {
  setFilters: (filterName: string, filterValue: string) => void;
  cleanFilter: () => void;
  filters: {
    type: string;
    transmission: string;
    engine: string;
    people: string;
  };
};
