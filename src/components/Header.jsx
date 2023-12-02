import Link from "next/link";

const style = 'hover:bg-indigo-400 hover:p-2 hover:rounded-xl';

const Header = () => {
  return (
    <div className="flex m-3 bg-green-400 flex-row p-3 font-sans text-xl rounded-xl ">
      <Link className="float-left pl-6" href={"/"}>
        <button className={style}>Home</button>
      </Link>
      <Link className="float-right pl-6" href="/wallet">
        <button className={style}>Wallet</button>
      </Link>
      <Link className="float-right pl-6" href="/swap">
        <button className={style}>Swap</button>
      </Link>
      <Link className="float-right pl-6" href="/admin">
        <button className={style}>Admin</button>
      </Link>

      <Link className="ml-auto pr-6" href="/profile">
        <button className={style}>Profile</button>{" "}
      </Link>
    </div>
  );
};

export default Header;
