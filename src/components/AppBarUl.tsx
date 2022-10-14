import { SetStateAction } from "../types";
import menuCloseIcon from "../../media/close-icon.svg";
import menuOpenIcon from "../../media/menu-icon.svg";

type Props = {
  listItems: {
    sectionName: string;
    onClick: () => void;
  }[];
  menuState: boolean;
  setMenuState: SetStateAction<boolean>;
};

export default function AppBarUl({ listItems, menuState, setMenuState }: Props) {
  return (
    <article className="AppBar-ul_container">
      <div className="phone-menu">
        <button className="button-reset" onClick={() => setMenuState((prevState) => !prevState)}>
          {!menuState && <img src={menuOpenIcon} alt="menu" className="menu-icon" />}
          {menuState && <img src={menuCloseIcon} alt="menu" className="menu-icon" />}
        </button>

        <ul className={menuState ? "AppBar-ul-phone-menu AppBar-ul-phone_menu-open " : "AppBar-ul-phone-menu"}>
          {listItems.map((entry) => {
            return (
              <li key={entry.sectionName}>
                <button
                  className="AppBar-button"
                  onClick={() => {
                    setMenuState((prevState) => !prevState);
                    entry.onClick();
                  }}
                >
                  {entry.sectionName}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <ul className="AppBar-ul">
        {listItems.map((entry) => {
          return (
            <li key={entry.sectionName}>
              <button className="AppBar-button" onClick={entry.onClick}>
                {entry.sectionName}
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
