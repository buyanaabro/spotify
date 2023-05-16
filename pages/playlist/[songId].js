import React from "react";
import Playlistdata from "../Playlistdata";

export async function getServerSideProps(context) {
  console.log(context.query.id);
  return {
    props: { songs },
  };
}

export default function Playlist({ songs }) {
  return (
    <div>
      <div>{songs.label}</div>
    </div>
  );
}
