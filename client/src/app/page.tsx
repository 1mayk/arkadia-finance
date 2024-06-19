import { links } from "./links";
import bgImage from "../../public/bg-linktree.png";
import Image from "next/image";

export default function Linktree() {
  return (
    <div className="w-full h-full bg-yellow-300 flex justify-center items-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-5 py-10">
        <div className="h-1/2 w-1/2 mx-auto sm:h-48 sm:w-48 max-[500px]:h-1/3 max-[500px]:w-1/3">
          <div className="aspect-w-1 aspect-h-1">
            <Image
              src={bgImage}
              alt="Background Image"
              className="rounded-full object-cover object-center"
              layout="fill"
            />
          </div>
        </div>
        <div className="text-center p-3 max-[500px]:gap-1">
          {/* Em um máximo de 500px, customizo a fonte para 1.5rem, etc */}
          <h1 className="text-4xl font-bold max-[500px]:text-[1.5rem]">
            Arkadia Finance
          </h1>
          <p className="text-lg mt-3 max-[500px]:text-[1rem] max-[500px]:mt-[1px]">
            Organize suas finanças!
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:gap-10">
          {links.map(({ text, color, link, title }, index) => (
            <a href={link} key={index} download={title}>
              <div
                className={`max-[350px]:w-[12rem] max-[350px]:text-[0.85rem] w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
              >
                {text}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
