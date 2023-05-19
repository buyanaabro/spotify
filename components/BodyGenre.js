import React from "react";
import HomeCard from "./GenreCard.js";

export default function BodyGenre() {
  return (
    <>
      <div class="p-8">
        <div class="flex items-center">
          <HomeCard
            image="https://picsum.photos/id/30/300/300"
            title="The Daily"
            subTitle="The New York Times office in court"
          />
          <HomeCard
            image="https://picsum.photos/id/45/300/300"
            title="What A Day"
            subTitle="Crooked Media intelligent"
          />
          <HomeCard
            class="md:block hidden"
            image="https://picsum.photos/id/65/300/300"
            title="Poem-a-Day"
            subTitle="The American Poets 1900s"
          />
          <HomeCard
            class="lg:block hidden"
            image="https://picsum.photos/id/67/300/300"
            title="Stay in the Know"
            subTitle="Smart, engaging podcasts"
          />
          <HomeCard
            class="xl:block hidden"
            image="https://picsum.photos/id/100/300/300"
            title="Mega Hit Mix"
            subTitle="A mega mix of 75 favorites"
          />
          <HomeCard
            class="xl:block hidden"
            image="https://picsum.photos/id/65/300/300"
            title="Going to blow"
            subTitle="A music of 69 favorites"
          />
          <HomeCard
            class="xl:block hidden"
            image="https://picsum.photos/id/100/300/300"
            title="Lots of love"
            subTitle="Lovely songs that will fill you."
          />
        </div>
      </div>
    </>
  );
}