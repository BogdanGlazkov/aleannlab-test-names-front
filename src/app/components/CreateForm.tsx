import { FC, useState } from "react";
import { createName, getNames } from "../api/names.api";

const CreateForm: FC = () => {
  const [newName, setNewName] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newName.trim()) return;
    const newname = await createName(newName);
    console.log(12, newname);

    setNewName("");
    await getNames();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="bg-transparent border rounded-sm"
        type="text"
        placeholder="Type name..."
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button className="ml-2" type="submit">
        Save
      </button>
    </form>
  );
};

export default CreateForm;
