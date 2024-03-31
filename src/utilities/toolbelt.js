const handleNavLinkClick = (event) => {
  const [clicked, setClicked] = useState(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const lis = document.querySelectorAll(".nav-menu li");
    lis.forEach((li) => {
      li.classList.remove("clicked");
    });

    setClicked(true);
    event.target.closest("li").classList.add("clicked");
  };

  const truncateOverview = (overview) => {
    if (overview && overview.length > 180) {
      return overview.substring(0, 180) + "...";
    } else if (overview) {
      return overview;
    } else {
      return "";
    }
  };

  export { handleNavLinkClick, truncateOverview };