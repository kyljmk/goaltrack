export const useCurrentSeason = () => {
  const year = new Date().getFullYear();
  const month = new Date().getMonth();

  const season = month > 6 ? year : year - 1;

  return season;
};
