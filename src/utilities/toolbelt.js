
  const truncateOverview = (overview) => {
    if (overview && overview.length > 150) {
      return overview.substring(0, 150) + "...";
    } else if (overview) {
      return overview;
    } else {
      return "";
    }
  };

  export { truncateOverview };