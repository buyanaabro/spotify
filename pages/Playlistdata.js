import React from "react";

const playList = {
  playList1: [
    {
      songName: "Гүнд",
      img: "https://cdns-images.dzcdn.net/images/cover/8f07364a42d9074afdac7df0a589a328/264x264.jpg",
    },
    {
      songName: "Хөөрхөн байгаач",
      img: "https://cdns-images.dzcdn.net/images/cover/0c765352c628335dbfdb4bb24980840c/264x264.jpg",
    },
    {
      songName: "Perfect Blue",
      img: "https://cdns-images.dzcdn.net/images/cover/0c765352c628335dbfdb4bb24980840c/264x264.jpg",
    },
    {
      songName: "Санасан байна",
      img: "https://cdns-images.dzcdn.net/images/cover/8f07364a42d9074afdac7df0a589a328/264x264.jpg",
    },
    {
      songName: "Үхсэн баас",
      img: "https://i.ytimg.com/vi/oc16WZJYVOE/maxresdefault.jpg",
    },
  ],
  playList2: [
    {
      songName: "Санасан байна",
      img: "https://cdns-images.dzcdn.net/images/cover/8f07364a42d9074afdac7df0a589a328/264x264.jpg",
    },
    {
      songName: "Үхсэн баас",
      img: "https://i.ytimg.com/vi/oc16WZJYVOE/maxresdefault.jpg",
    },
  ],
};

function Playlistdata() {
  const addToPlaylist = () => {
    setPlayLists([
      ...playlists,
      {
        label: "Playlist",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5Z11CZTMkvsu0yzbg2XxyKrR5A45QLrEaw&usqp=CAU",
        name: "MyPlaylist#",
      },
    ]);
    console.log("first");
  };

  return;
}

export default Playlistdata;
