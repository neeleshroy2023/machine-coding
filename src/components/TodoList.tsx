import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function TodoList() {
  const [rows, setRows] = useState<any>([]);
  const [currentTodo, setCurrentTodo] = useState<string>("");

  const handleAddTodo = () => {
    setRows((prev: any) => [...prev, { id: uuidv4(), value: currentTodo }]);
    setCurrentTodo("");
  };

  const handleRemoveTodo = (id: string) => {
    const filteredRows = rows.filter((row: any) => row.id !== id);
    setRows(filteredRows);
  };

  return (
    <section className="mt-8 flex justify-left gap-8">
      <div className="flex gap-4">
        <Input
          type="text"
          value={currentTodo}
          onChange={(e) => setCurrentTodo(e.target.value)}
          className="w-[350px]"
        />
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
      { rows?.length > 0 && <div className="border-r border-gray-500"></div> }
      <div>
        <ul>
          {rows.map((row: any) => (
            <li id={row.id} className="flex gap-4 items-center card mt-4">
              <p className="w-[300px]">{row.value}</p>
              <Button onClick={() => handleRemoveTodo(row.id)} variant="destructive">
                Delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;
