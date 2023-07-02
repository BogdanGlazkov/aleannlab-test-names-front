"use client";

import { FC, useEffect, useState } from "react";
import { getAllNames } from "../../services/namesService";
import NamesItem from "./NamesItem";
import CreateForm from "./CreateForm";

const NamesList: FC = () => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    async () => {
      const allNames = await getAllNames();
      //   setNames(allNames);
    };
  });

  return (
    <div>
      <h2>NamesList</h2>
      <NamesItem />
      <CreateForm />
    </div>
  );
};

export default NamesList;
