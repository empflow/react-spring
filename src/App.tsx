import { animated, useTransition } from "@react-spring/web";
import { useState } from "react";
const IMAGES = [
  "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/154443660/original/734570cec0de955789ff0acd80caad3d582b85e0/create-a-generative-art-piece-for-you.png",
  "https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592330659753-70M66LGEPXFTQ8S716MX/Generative+Art+by+Mark+Stock+-+Gyre+35700.jpg",
  "https://cdn.pixabay.com/photo/2018/09/04/09/12/generative-art-3653275_1280.jpg",
];

function App() {
  const [index, setIndex] = useState(0);
  const transition = useTransition(index, {
    from: { opacity: 0, filter: "blur(8px)" },
    enter: { opacity: 1, filter: "blur(0px)" },
    leave: { opacity: 0, filter: "blur(8px)" },
    onRest: (_, __, item) => {
      if (item === IMAGES.length - 1) setIndex(0);
      else setIndex(item + 1);
    },
    config: {
      duration: 500,
    },
    delay: 1000,
    exitBeforeEnter: true,
  });

  return (
    <main className="min-h-screen flex justify-center items-center">
      {transition((style, item) => {
        const src = IMAGES[item];
        return (
          <animated.div style={style} className="w-[80vw]">
            <img className="w-full rounded h-full aspect-video" src={src} />
          </animated.div>
        );
      })}
    </main>
  );
}

export default App;
