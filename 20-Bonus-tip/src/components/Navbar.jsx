const Navbar = (props) => {
  function changeTheme() {
    props.setTheme("Dark");
  }
  return (
    <div>
      <button className="change-theme-btn" onClick={changeTheme}>Change Theme</button>
    </div>
  );
};

export default Navbar;
