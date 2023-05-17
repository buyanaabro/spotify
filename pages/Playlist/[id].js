import React from "react";
import { playList } from "../Playlistdata";

export async function getServerSideProps(context) {
  const songs = playList.find((e) => e.number == context.query.id);
  return {
      props: { songs },
  };
}
export default function Playlist({ songs }) {
  console.log(songs)
  return (
    <div>
      {songs.myPlaylist[0].songName}
    </div>
  );
}