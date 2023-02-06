import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image"
import { FaRegWindowClose} from 'react-icons/fa'
const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen  after:absolute after:top-0 after:left-0  grid place-content-center">
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsSearchModal(false);
        }}
      >
        <div className="relative z-50 md:w-[600px] w-[400px]  p-10 bg-slate-300 rounded-2xl">
          <Title addClass="text-[40px] text-center">Search</Title>
          <input
            type="text"
            placeholder="Search..."
            className="border-1 w-full my-4"
          />
          <div>
            <ul>
                <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                    <div className="relative flex">
                        <Image src="/images/f1.png" width={48} height={48} alt="f1"/>
                    </div>
                    <span className="font-bold">Good Pizza</span>
                    <span className="font-bold">10$</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                    <div className="relative flex">
                        <Image src="/images/f1.png" width={48} height={48} alt="f1"/>
                    </div>
                    <span className="font-bold">Good Pizza</span>
                    <span className="font-bold">10$</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary transition-all">
                    <div className="relative flex">
                        <Image src="/images/f1.png" width={48} height={48} alt="f1"/>
                    </div>
                    <span className="font-bold">Good Pizza</span>
                    <span className="font-bold">10$</span>
                </li>
            </ul>
            <button className="absolute top-5 right-5 ">
            <FaRegWindowClose onClick={() => {
          setIsSearchModal(false);
        }} className="hover:text-primary text-white transition-all" size={30}/>
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
