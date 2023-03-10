import React from "react";
import { useSearchParams } from "react-router-dom";
import { ITeamInfo, ITeamInfoProps } from "../Types";

function TeamInfo({ teamInfo }: ITeamInfoProps) {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  return <div>TeamInfo</div>;
}

export default TeamInfo;
