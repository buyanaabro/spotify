import React from "react";
import { playList } from "../Playlistdata";

export async function getServerSideProps(context) {
  const songs = playList.find((e) => e.name == context.query.id);
  console.log(songs)
  return {
      props: { songs },
  };
}
export default function Playlist({ songs }) {
  console.log(songs)
  return (
    <div>
      {songs.MyPLaylist1?.map((row, index) => (
        <div key={index}>
          <div className="text-black">{row.songName}</div>
        </div>
      ))}
    </div>
  );
}
