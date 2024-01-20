import { links } from "./links";
import bgImage from "../../public/bg-linktree.jpg";
import Image from "next/image";

export default function Linktree() {
  return (
    <div className="w-full h-screen bg-yellow-300 flex justify-center items-center">
      <div className="max-w-2xl mx-auto flex flex-col gap-5">
        <div className="h-48 w-48 mx-auto">
          <div className=" aspect-w-1 aspect-h-1">
            <Image
              src={bgImage}
              alt="Background Image"
              className="rounded-full object-cover object-center"
              layout="fill"
            />
          </div>
        </div>
        <div className="text-center p-3">
          <h1 className="text-4xl font-bold">Arkadia Finance</h1>
          <p className="text-lg mt-3">Organize suas finanças!</p>
        </div>
        <div className="flex flex-col gap-10">
          {links.map(({ text, color, link }, index) => {
            return (
              <a href={link} key={index}>
                <div
                  className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
                >
                  {text}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
