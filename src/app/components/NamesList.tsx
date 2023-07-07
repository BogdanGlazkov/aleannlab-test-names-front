"use client";

import { useEffect, useState, useRef } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { getNames, editRank } from "../api/names.api";
import NamesItem from "./NamesItem";
import CreateForm from "./CreateForm";
import Loader from "./Loader";
import { NameDto } from "../api/dto/names.dto";

const NamesList = () => {
  const [names, setNames] = useState<NameDto[] | null>(null);
  const [isRankChanged, setIsRankChanged] = useState(false);
  const originalData = useRef<NameDto[] | null>(null);

  const onRankUp = (rank: number) => {
    if (!names || rank <= 1) return;
    setNames((prevNames) => {
      if (!prevNames) return null;
      const idx = prevNames.findIndex((item: NameDto) => item.rank === rank);
      if (idx === -1 || !prevNames[idx - 1]) return prevNames;
      const updatedNames = [...prevNames];
      updatedNames[idx].rank--;
      updatedNames[idx - 1].rank++;
      setIsRankChanged(true);
      return updatedNames;
    });
  };

  const onRankDown = (rank: number) => {
    if (!names || rank >= names.length) return;
    setNames((prevNames) => {
      if (!prevNames) return null;
      const idx = prevNames.findIndex((item: NameDto) => item.rank === rank);
      if (idx === -1) return prevNames;
      const updatedNames = [...prevNames];
      updatedNames[idx].rank++;
      updatedNames[idx + 1].rank--;
      setIsRankChanged(true);
      return updatedNames;
    });
  };

  const onRankChangeSave = async () => {
    if (!names || !originalData.current) return;

    for (const item of originalData.current) {
      const itemToCompare = names.find((el) => el.id === item.id);

      if (
        itemToCompare &&
        +item.rank !== +itemToCompare.rank &&
        +itemToCompare.rank > 0
      ) {
        await editRank(item.id, +itemToCompare.rank);
      }
    }
    setIsRankChanged(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNames();
      if (response) {
        setNames(response);
        originalData.current = response.map((el: NameDto) => ({ ...el }));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(names)) {
      const sortedNames = [...names].sort(
        (a: NameDto, b: NameDto) => a.rank - b.rank
      );
      if (JSON.stringify(sortedNames) !== JSON.stringify(names)) {
        setNames(sortedNames);
      }
    }
  }, [names]);

  if (!names) return <Loader />;

  return (
    <div>
      <h2 className="text-center text-3xl mb-4">Rank List</h2>
      <ul>
        {names.map((item: NameDto) => (
          <li key={item.id} className="flex gap-2 my-1">
            <div className="flex gap-2 mr-2">
              <button
                className="rounded hover:outline hover:outline-1"
                type="button"
                onClick={() => onRankUp(item.rank)}
                title="Up"
              >
                <AiOutlineUp fill="green" />
              </button>
              <button
                className="rounded hover:outline hover:outline-1"
                type="button"
                onClick={() => onRankDown(item.rank)}
                title="Down"
              >
                <AiOutlineDown fill="red" />
              </button>
            </div>

            <NamesItem id={item.id} name={item.name} rank={item.rank} />
          </li>
        ))}
      </ul>

      {!isRankChanged ? null : (
        <form className="mt-4" onSubmit={onRankChangeSave}>
          <button
            className="ml-2 rounded px-2 hover:outline hover:outline-1"
            type="button"
            title="Save"
            onClick={onRankChangeSave}
          >
            Save changes
          </button>
        </form>
      )}
      <CreateForm />
    </div>
  );
};

export default NamesList;
