import { MdMenu } from "react-icons/md";

function Toggle() {
  return (
    <div className="px-[20px] py-[10px] flex justify-between font-semibold text-[20px]">
      <div>
        <h2>Logo</h2>
      </div>

      <ul className=" gap-[17px] hidden md:flex">
        <li>Product</li>
        <li>About us</li>
        <li>Contact</li>
        <li>Footer</li>
      </ul>

      <div className="text-[30px] md:hidden">
        <MdMenu />
      </div>
    </div>
  );
}

export default Toggle;
