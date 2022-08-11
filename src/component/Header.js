const Header = ({todoListinsert}) => {
  return (
  <form onSubmit={todoListinsert}>
    <input/>
    <button>입력</button>  
  </form>
  );
}

export default Header;