import React from "react";
import { useSearchParams } from "react-router-dom";

function TeamInfo() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return <div>TeamInfo</div>;
}

export default TeamInfo;
