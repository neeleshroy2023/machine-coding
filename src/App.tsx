import "./App.css";
import StarRating from "@/components/StarRating";
import TodoList from "@/components/TodoList";

function App() {
  return (
    <div className="container mx-auto">
      <div className="mt-20">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Star rating
        </h2>
        <StarRating />
      </div>
      <div className="mt-20">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Todo List
        </h2>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
