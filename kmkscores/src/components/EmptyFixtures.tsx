import React from "react";
import { IEmptyMessage } from "../Types";

function EmptyFixtures({ message }: IEmptyMessage) {
  return <div>{message}</div>;
}

export default EmptyFixtures;
