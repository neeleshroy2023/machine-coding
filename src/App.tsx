import "./App.css";
import StarRating from "@/components/StarRating";
import TodoList from "@/components/TodoList";
import ResponsiveLayout from "@/components/ResponsiveLayout";

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
      <div className="mt-20">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Responsive Layout
        </h2>
        <ResponsiveLayout>
            <div className="p-4 bg-gray-100">1</div>
            <div className="p-4 bg-gray-100">2</div>
            <div className="p-4 bg-gray-100">3</div>
            <div className="p-4 bg-gray-100">4</div>
            <div className="p-4 bg-gray-100">5</div>
            <div className="p-4 bg-gray-100">6</div>
        </ResponsiveLayout>
      </div>
    </div>
  );
}

export default App;
