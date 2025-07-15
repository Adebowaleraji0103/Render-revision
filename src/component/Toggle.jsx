import { MdMenu } from "react-icons/md";

function Toggle() {
  return (
    <div>
      <div className="flex">
        <h2>Logo</h2>

        <ul className="flex ">
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
