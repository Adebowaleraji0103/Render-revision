import { MdMenu } from "react-icons/md";
import { useState } from "react";

function Toggle() {
  const [open, setOpen] = useState(false);
  function toggleNavbar() {
    setOpen((previousValue) => !previousValue);
  }

  return (
    <div className="px-[20px] py-[10px] flex justify-between font-semibold text-[20px]">
      <div>
        <h2>Logo</h2>
      </div>

      <button onClick={toggleNavbar}>
        <MdMenu className="text-[30px] md:hidden" />
      </button>

      <nav>
        <ul className={` hidden gap-[17px]  md:flex flex-row ${
            open ? "block" : "hidden"
          } md:flex`}
          <li>Product</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Footer</li>
        </ul>
      </nav>
    </div>
  );
}

export default Toggle;
