"use client";

import { FC, useEffect, useState } from "react";
import { getNames } from "../api/names.api";
import NamesItem from "./NamesItem";
import CreateForm from "./CreateForm";
import Loader from "./Loader";
import { NameDataDto, NameDto } from "../api/dto/names.dto";

const NamesList = () => {
  const [names, setNames] = useState<NameDataDto | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const allNames = await getNames();
      if (allNames)
        setNames(allNames.sort((a: NameDto, b: NameDto) => a.rank - b.rank));
    };
    fetchData();
  }, []);

  if (!names) return <Loader />;
  else
    return (
      <div>
        <h2 className="text-center text-3xl">Rank List</h2>

        {Array.isArray(names) &&
          names.map((item: NameDto) => (
            <NamesItem
              key={item.id}
              id={item.id}
              name={item.name}
              rank={item.rank}
            />
          ))}

        <CreateForm />
      </div>
    );
};

export default NamesList;
