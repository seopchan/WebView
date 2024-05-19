import React from 'react';
import './App.css';
import TodoList from "./view/TodoList";

function App() {
  const viewList = ["TodoList"];
  const [currentView, setCurrentView] = React.useState("");
  return (
    <div className="App">
      <div className="App-header">
        <h1>View List</h1>
        {
          viewList.map((view, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (currentView === "") {
                    setCurrentView(view)
                  } else {
                    setCurrentView("")
                  }
                }}
              >
                {view}
              </button>
            )
          })
        }
      </div>
      <div className="App-body">
        {currentView === "TodoList" && <TodoList />}
      </div>
    </div>
  );
}

export default App;
