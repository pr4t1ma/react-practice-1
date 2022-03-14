import "./figurecaption.css";
const Figurecaption = () => {
  return (
    <figure className="figurecaption">
      <figcaption className="figurecaption__text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          fugiat neque officia voluptates autem omnis nesciunt doloribus earum
          consequatur quod. Quae dolor atque voluptatum ullam, officia
          recusandae beatae omnis enim?
        </p>
      </figcaption>
      <div className="figurecaption___img">
        <img src="https://picsum.photos/id/1/200/300" alt="" />
      </div>
    </figure>
  );
};
export { Figurecaption };
