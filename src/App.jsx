import Toggle from "./component/Toggle";
import Card from "./component/Card";

const cardInfo = [
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Foodie",
    price: "$20",
    discount: "30%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Gourmet Delight",
    price: "$22",
    discount: "25%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Chocolate Bliss",
    price: "$18",
    discount: "20%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Sweet Escape",
    price: "$25",
    discount: "35%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Brownie Lover",
    price: "$19",
    discount: "15%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Decadent Brownie",
    price: "$23",
    discount: "40%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Rich Fudge",
    price: "$21",
    discount: "10%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Caramel Indulgence",
    price: "$26",
    discount: "50%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Chocolate Fantasy",
    price: "$20",
    discount: "30%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Brownie Heaven",
    price: "$24",
    discount: "35%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Velvet Treat",
    price: "$27",
    discount: "45%",
  },
  {
    img: "images/image-brownie-tablet.jpg",
    name: "Fudge Paradise",
    price: "$28",
    discount: "50%",
  },
];

function App() {
  return (
    <div>
      <Toggle />

      <div className="px-[1rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cardInfo.map((product) => (
          <Card cardInfo={product} />
        ))}
      </div>
    </div>
  );
}
export default App;
