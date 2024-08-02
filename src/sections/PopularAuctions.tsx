import React from "react";

// data
import { popularAuctions, sales } from "../data";

// component
import Card from "../components/Card";

export default function PopularAuctions() {
  const [activeTab, setActiveTab] = React.useState("architecture");
  return (
    <article className="mx-4 md:w-9/12 md:mx-auto pt-10 pb-20 text-center">
      <p className="uppercase text-gray-50 text-sm">Overline</p>
      <h3 className="font-bold text-3xl mb-8 mt-4">
        Most popular live aunctions
      </h3>
      <ul
        className="flex overflow-x-auto justify-center gap-5"
        id="dataTab"
        data-tabs-toggle="#dataContent"
        role="tablist"
      >
        <li role="presentation">
          <button
            className={`rounded-xl border transition-colors ease-linear duration-200 border-gray-50 px-2 py-2 text-sm text-gray-100 ${
              activeTab === "architecture" && "bg-purple-dark text-white"
            }`}
            id="architecture-tab"
            data-tabs-target="#architecture"
            type="button"
            role="tab"
            aria-controls="architecture"
            aria-selected="false"
            onClick={() => {
              setActiveTab("architecture");
            }}
          >
            Architecture
          </button>
        </li>
        <li role="presentation">
          <button
            className={`rounded-xl border transition-colors ease-linear duration-200 border-gray-50 px-2 py-2 text-sm text-gray-100 ${
              activeTab === "photography" && "bg-purple-dark text-white"
            }`}
            id="photography-tab"
            data-tabs-target="#photography"
            type="button"
            role="tab"
            aria-controls="photography"
            aria-selected="false"
            onClick={() => {
              setActiveTab("photography");
            }}
          >
            Photography
          </button>
        </li>
        <li role="presentation">
          <button
            className={`rounded-xl border transition-colors ease-linear duration-200 border-gray-50 px-2 py-2 text-sm text-gray-100 ${
              activeTab === "games" && "bg-purple-dark text-white"
            }`}
            id="games-tab"
            data-tabs-target="#games"
            type="button"
            role="tab"
            aria-controls="games"
            aria-selected="false"
            onClick={() => {
              setActiveTab("games");
            }}
          >
            Games
          </button>
        </li>
        <li role="presentation">
          <button
            className={`rounded-xl border transition-colors ease-linear duration-200 border-gray-50 px-2 py-2 text-sm text-gray-100 ${
              activeTab === "music" && "bg-purple-dark text-white"
            }`}
            id="music-tab"
            data-tabs-target="#music"
            type="button"
            role="tab"
            aria-controls="music"
            aria-selected="false"
            onClick={() => {
              setActiveTab("music");
            }}
          >
            Music
          </button>
        </li>
      </ul>
      <div className="flex flex-col">
        <div className="mt-12 flex gap-5 overflow-x-scroll">
          {popularAuctions.map(
            (
              { thumbnail, title, price, timeLeft, peopleBidding, className },
              index
            ) => {
              return (
                <Card
                  key={index}
                  thumbnail={thumbnail}
                  title={title}
                  price={price}
                  timeLeft={timeLeft}
                  peopleBidding={peopleBidding}
                  className={className}
                />
              );
            }
          )}
        </div>
        <button
          type="button"
          className="rounded-xl border mx-auto border-gray-100 text-sm text-gray-100 mt-16 px-4 py-2 w-fit"
        >
          Show me more
        </button>
      </div>

      <hr className="mt-16" />
    </article>
  );
}
