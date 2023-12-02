import Header from "./Header";

const Card = (props) => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center mt-24 m-10 pb-10 text-xl">
        <div className="bg-fuchsia-400 py-5 px-20 rounded-2xl">
          <h2 className="text-center font-extrabold text-3xl pb-8 ">
            {props.title}
          </h2>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Card;
