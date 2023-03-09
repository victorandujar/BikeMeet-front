import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="main-header">
      <div className="main-header__logo logo">
        <img
          src="images/Logo.png"
          alt=""
          width={40}
          height={35}
          className="logo__image"
        />
        <h2 className="logo__title">BIKEMEET</h2>
      </div>
      <nav className="main-header__navigation">
        <i className="fa-solid fa-house-chimney fa-solid--active"></i>
        <i className="fa-solid fa-rectangle-list fa-solid--active"></i>
        <i className="fa-solid fa-plus fa-solid--active"></i>
        <i className="fa-solid fa-right-from-bracket fa-solid--active"></i>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
