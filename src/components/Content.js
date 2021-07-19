import ImageOne from "../images/egg.jpg";
import ImageTwo from "../images/egg-2.jpg";

const Content = () => {
  return (
    //   reffer index.css for menu-card
    <>
      <div className="menu-card">
        <img src={ImageOne} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-2">Egg Muffins</h1>
          <p className="mb-2 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nesciunt saepe distinctio explicabo atque cumque vitae
            fuga perferendis libero! Repellendus.
          </p>
          <span className="text-center font-black">$16</span>
        </div>
      </div>

      <div className="menu-card">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl mb-2">Boiled Eggs</h1>
          <p className="mb-2 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur nesciunt saepe distinctio explicabo atque cumque vitae
            fuga perferendis libero! Repellendus.
          </p>
          <span className="text-center font-black">$16</span>
        </div>
      </div>
    </>
  );
};

export default Content;
