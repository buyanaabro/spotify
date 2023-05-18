import Link from 'next/link';
import { useState } from 'react';
import uniqolor from 'uniqolor';

export default function LibraryLink({ category, image }) {
  const [randColor, setRandColor] = useState(uniqolor.random());
  
  return (
    <Link href="/Genre">
      <div
        className="
          contrast-[2] 
          brightness-[0.87] 
          rounded-xl 
          aspect-square 
          relative 
          overflow-hidden
        "
        style={{ backgroundColor: randColor.color }}
      >
        {randColor.color &&
          <div className="text-white pt-3 pl-4 font-semibold text-[23px]">
            {category}
          </div>
        }
        {image &&
          <img
            className="
              absolute 
              contrast-[0.55]
              -right-3.5 
              bottom-0 
              max-w-[100px] 
              rotate-[20deg]
            "
            src={image}
          />
        }
      </div>
    </Link>
  );
}
