"use client";

import { useEffect, useState } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { getNames, editName, editRank } from "../api/names.api";
import NamesItem from "./NamesItem";
import CreateForm from "./CreateForm";
import Loader from "./Loader";
import { NameDto } from "../api/dto/names.dto";

const NamesList = () => {
  const [fetchedNames, setFetchedNames] = useState<NameDto[] | null>(null);
  const [editedNames, setEditedNames] = useState<NameDto[] | null>(null);
  const [isRankChanged, setIsRankChanged] = useState(false);

  const onRankUp = (rank: number) => {
    if (!editedNames) return;
    if (rank <= 1) return;
    const idx = editedNames.findIndex((item: NameDto) => item.rank === rank);
    const editedArr = [...editedNames];
    editedArr[idx].rank--;
    editedArr[idx - 1].rank++;
    setEditedNames(editedArr);
  };

  const onRankDown = (rank: number) => {
    if (!editedNames) return;
    if (rank >= editedNames.length) return;
    const idx = editedNames.findIndex((item: NameDto) => item.rank === rank);
    const editedArr = [...editedNames];
    editedArr[idx].rank++;
    editedArr[idx + 1].rank--;
    console.log(22, editedArr[idx].rank);

    setEditedNames(editedArr);
  };

  const onRankChangeSave = () => {
    if (!editedNames || !fetchedNames) return;
    fetchedNames.forEach(async (item) => {
      const itemToCompare = editedNames.find((el) => el.id === item.id);
      if (item.rank === itemToCompare?.rank) {
        console.log(itemToCompare, item);
        // await editRank(item.id, editedNames[idx].rank);
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNames();
      if (response) {
        setFetchedNames(response);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(fetchedNames))
      setEditedNames(
        fetchedNames.sort((a: NameDto, b: NameDto) => a.rank - b.rank)
      );
  }, [fetchedNames, editedNames]);

  if (!fetchedNames) return <Loader />;
  else
    return (
      <div>
        <h2 className="text-center text-3xl mb-4">Rank List</h2>
        <ul>
          {Array.isArray(editedNames) &&
            editedNames.map((item: NameDto) => (
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

        {isRankChanged ? null : (
          <form className="mt-4" onSubmit={onRankChangeSave}>
            <button
              className="ml-2 rounded px-2 hover:border"
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
