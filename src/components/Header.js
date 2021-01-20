import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className='app-header'>
      <Link to='/' className='app-header-logo'>
        90s shop
      </Link>

      <nav className='app-header-nav'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart (0)</Link>
      </nav>
    </header>
  );
}
