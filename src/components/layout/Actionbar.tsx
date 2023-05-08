import Search from "./Search";

const Actionbar = () => {
  return (
    <nav className="actionbar">
      <span className="actionbar__logo">APP LOGO</span>
      <Search />
      <div className="actionbar__profile">
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Actionbar;
