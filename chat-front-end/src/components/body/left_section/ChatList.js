import React from "react";

import Searchbar from "./Searchbar";
import Status from "./Status";
import List from "./List";

function ChatList() {
  return (
    <div>
      <h5 className="" style={{ color: "#8895A7" }}>
        <b>Chats</b>
      </h5>
      <Searchbar />
      <div className="d-flex justify-content-around border-bottom">
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
      </div>
      <div className="mt-4">
        <h5 style={{ marginBottom: "1.2rem", color: "#8895A7" }}>
          <b>Recent Chats</b>
        </h5>
        <List />
      </div>
    </div>
  );
}

export default ChatList;
