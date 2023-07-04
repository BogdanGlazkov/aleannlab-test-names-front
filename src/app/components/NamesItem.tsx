"use client";

import { FC, useState } from "react";
import {
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineSave,
  AiOutlineClose,
} from "react-icons/ai";
import { NameDto } from "../api/dto/names.dto";
import { editName, deleteName } from "../api/names.api";

const NamesItem: FC<NameDto> = ({ id, name, rank }: NameDto) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const onEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const onSubmit = async () => {
    await editName(id, editedName);
    setIsEditing(false);
  };

  const onDelete = async (id: number) => {
    confirm(`Delete item ${name}?`) && (await deleteName(id));
  };

  return (
    <section className="flex justify-between mb-1 h-6 sm:w-1/3">
      <div className="flex gap-2">
        <span>{rank}.</span>

        {isEditing ? (
          <form onSubmit={onSubmit} className="flex justify-between">
            <input
              className="bg-transparent border rounded-sm px-2 w-full"
              type="text"
              placeholder="Type name..."
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
            />
            <div className="flex">
              <button
                className="ml-2 rounded-sm px-2 hover:outline hover:outline-1"
                type="submit"
                title="Save"
              >
                <AiOutlineSave />
              </button>
              <button
                className="ml-2 rounded-sm px-2 hover:outline hover:outline-1"
                type="button"
                title="Close"
                onClick={onEditToggle}
              >
                <AiOutlineClose />
              </button>
            </div>
          </form>
        ) : (
          <p>{name}</p>
        )}
      </div>

      {isEditing ? null : (
        <form className="flex">
          <button
            className="inline-flex justify-center items-center px-2 rounded-sm hover:outline hover:outline-1"
            type="button"
            title="Edit"
            onClick={onEditToggle}
          >
            <AiOutlineEdit />
          </button>
          <button
            className="ml-2 inline-flex justify-center items-center px-2 rounded-sm hover:outline hover:outline-1"
            type="submit"
            title="Delete"
            onClick={() => onDelete(id)}
          >
            <AiOutlineDelete />
          </button>
        </form>
      )}
    </section>
  );
};

export default NamesItem;
