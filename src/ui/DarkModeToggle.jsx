import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {

  const {isDarkMode,toggleDarkMode } = useDarkMode()
  
  return (
    
    <button
      className="app-header__icon-btn"
      aria-label="تغییر حالت نمایش"
      onClick={toggleDarkMode}
    >

      {isDarkMode ?( <HiOutlineSun size={20} />) : <HiOutlineMoon size={20} />  }
     
    </button>
  );
}

export default DarkModeToggle;