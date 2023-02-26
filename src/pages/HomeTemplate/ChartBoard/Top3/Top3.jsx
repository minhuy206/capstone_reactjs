import { faCirclePlay } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Top3.css";

const product = {
  images: [
    {
      src: "https://media.zicxa.com/1115165",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://images.alphacoders.com/113/thumb-1920-1136691.jpeg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      // src: "https://media.zicxa.com/1115165",
      src: "data:image/jpeg;base64,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",
      alt: "Model wearing plain gray basic tee.",
    },
  ],
};

export const Top3 = () => {
  return (
    <div className="flex justify-between h-full">
      <div className="hidden rounded-2xl lg:block top1Item">
        <img
          src={product.images[0].src}
          alt={product.images[0].alt}
          className="h-full w-full object-cover object-center"
        />
        <div className="top1Score absolute p-1 text-center">
          <span className="text-white text-sm">7.2</span>
          <span className="text-primary text-xs">/10</span>
          <span>⭐️</span>
        </div>
        <div className="p-5 top3Overplay h-1/3">
          <p className="text-white relative top1 text-5xl inline-block">01</p>
          <p className="uppercase text-white text-2xl mt-4">
            SpiderMan: into The spider-verse
          </p>
        </div>
        <div className="hoverOverplay">
          <FontAwesomeIcon
            icon={faCirclePlay}
            size="6x"
            className="text-primary "
          />
        </div>
      </div>
      <div className="top23ItemContainer">
        <div className="rounded-2xl top2Item">
          <img
            src={product.images[1].src}
            alt={product.images[1].alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="top2Score p-1">
            <span className="text-white text-sm">8.1</span>
            <span className="text-primary text-xs">/10</span>
            <span>⭐️</span>
          </div>
          <div className="top3Overplay h-1/3 p-5 flex items-center">
            <p className="text-white relative text-5xl inline-block top2 mr-5">
              02
            </p>
            <p className="uppercase text-white text-xl">Mortal Kombat</p>
          </div>
          <div className="hoverOverplay">
            <FontAwesomeIcon
              icon={faCirclePlay}
              size="6x"
              className="text-primary "
            />
          </div>
        </div>
        <div className="rounded-2xl top3Item">
          <img
            src={product.images[2].src}
            alt={product.images[2].alt}
            className="h-full w-full object-cover object-center"
          />
          <div className="top3Score absolute p-1 text-center">
            <span className="text-white text-sm">7.2</span>
            <span className="text-primary text-xs">/10</span>
            <span>⭐️</span>
          </div>
          <div className="top3Overplay h-1/3 p-5 flex items-center">
            <p className="text-white relative text-5xl inline-block top3 mr-5">
              03
            </p>
            <p className="uppercase text-white text-xl">Jonh Wick chapter 3</p>
          </div>
          <div className="hoverOverplay">
            <FontAwesomeIcon
              icon={faCirclePlay}
              size="6x"
              className="text-primary "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
