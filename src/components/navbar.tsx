import Image from "next/image";
import logo from "../../public/navbar/logo.png"

function Navbar() {
  return (
    <div className="bg-yellow-300 h-[120px] relative w-full z-50">
      <nav className="flex items-center justify-between gap-5 absolute top-1 w-full px-10 bg-black text-white">
        <div className="flex items-center justify-center rounded-full my-5 bg-yellow-400">
          <Image
            src={logo}
            alt="Logo"
            className="size-16 text-black"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="flex items-center justify-center gap-7">
          <div>Главная</div>
          <div>О нас</div>
          <select className="rounded-full border border-yellow-300 p-1 focus-within:outline-none text-yellow-300">
            <option value="0" selected disabled>
              Курсы
            </option>
            <option value="1">Robototics</option>
            <option value="2">Mathematics</option>
            <option value="3">English</option>
          </select>
          <div>Контакты</div>
          <button className="bg-yellow-400 cursor-pointer text-black font-bold py-3 px-8 rounded-xl shadow-[0_0_20px_rgba(255,255,0,0.6)] hover:shadow-[0_0_25px_rgba(255,255,0,0.8)] transition">
            ПОЗВОНИТЬ
          </button>
        </div>
        <div className="flex items-center justify-center gap-5">
          <button className="text-yellow-300 cursor-pointer">RU</button>
          <button className="text-white px-5 py-1 bg-yellow-300 cursor-pointer rounded-xl">
            UZ
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
