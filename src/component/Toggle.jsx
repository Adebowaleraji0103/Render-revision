import { MdMenu } from "react-icons/md";

function Toggle() {
  return (
    <div className="px-[20px] py-[10px]">
      <div className="flex justify-between font-semibold text-[20px]">
        <h2>Logo</h2>

        <ul className="flex gap-[17px]">
          <li>Product</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Footer</li>
        </ul>
      </div>

      <MdMenu />
    </div>
  );
}

export default Toggle;
