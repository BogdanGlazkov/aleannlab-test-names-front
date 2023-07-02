import { FC } from "react";
import { NameDto } from "../api/dto/names.dto";

const NamesItem = ({ id, name, rank }: NameDto) => {
  return (
    <div className="flex gap-4">
      <span>{rank}</span>
      <p>{name}</p>
    </div>
  );
};

export default NamesItem;
