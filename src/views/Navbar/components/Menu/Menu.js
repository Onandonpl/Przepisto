import React, { useState } from "react";
import MenuButton from "../MenuButton/MenuButton";
import { MenuContainer, MenuExpanded } from "./style";
import { Link } from "react-router-dom";
const Menu = () => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };
  return (
    <MenuContainer>
      <MenuButton handleExpand={handleExpand} />
      {expand ? (
        <MenuExpanded>
          <Link to="/recipe-name">Dodaj Przepis</Link>
          <Link to="/user">Konto</Link>
          <Link to="/">Strona główna</Link>
        </MenuExpanded>
      ) : null}
    </MenuContainer>
  );
};

export default Menu;
