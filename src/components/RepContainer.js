import React from "react";
import Search from "./Search";
import Sidebar from "./Sidebar";

function NoteContainer() {
  return (
    <>
      <Search />
      <div className="container">
        <Sidebar />
      </div>
    </>
  );
}

export default NoteContainer;
