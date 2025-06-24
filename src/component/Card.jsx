const Card = ({cardInfo}) => {
    console.log(cardInfo.name)
  return (
    <div className=" custom-boxShadow rounded-[9px] mt-10 ">
      <div className="w-full ">
        <img className="w-full object-cover" src="images/image-brownie-tablet.jpg" alt="" />
      </div>
      <h2 className="font-bold text-[20px] px-2">{cardInfo.name}</h2>
      <div className="flex justify-between px-2 font-semibold ">
        <p className="text-zinc-400 line-through ">{cardInfo.discount}</p>
        <p>{cardInfo.price}</p>
      </div>
    </div>
  );
};

export default Card;
