import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className="actionbar__search">
      <BsSearch />
      <input type="text" placeholder="search" />
    </div>
  );
};

export default Search;
