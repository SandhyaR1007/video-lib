import { BiHomeAlt } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineLike, AiOutlineSetting } from "react-icons/ai";
import { MdOutlineWatchLater, MdOutlinePlaylistPlay } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>
        <RxHamburgerMenu />
      </h3>
      <ul className="sidebar__items">
        <li>
          <BiHomeAlt />
        </li>
        <li>
          <AiOutlineLike />
        </li>
        <li>
          <MdOutlineWatchLater />
        </li>
        <li>
          <MdOutlinePlaylistPlay />
        </li>
        <li>
          <AiOutlineSetting />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
