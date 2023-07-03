import { FC, useState } from "react";
import { createName } from "../api/names.api";

const CreateForm: FC = () => {
  const [newName, setNewName] = useState("");

  const onSubmit = async () => {
    if (!newName.trim()) return;
    const response = await createName(newName);

    if (!response) {
      alert("Oops! Looks like this name already exists. Try another please");
    } else {
      setNewName("");
    }
  };

  return (
    <div className="mt-4">
      <h3 className="mb-2">Create a new name</h3>
      <form onSubmit={onSubmit}>
        <input
          className="bg-transparent border rounded-sm px-2"
          type="text"
          placeholder="Type name..."
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button
          className="ml-2 rounded px-2 hover:border"
          type="submit"
          title="Save"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateForm;
