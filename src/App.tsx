import React from 'react';
import {AppButton} from "./component/AppButton";
import {AppCard} from "./component/AppCard";
import {AppInput} from "./component/AppInput";
import './App.css';

function App() {
  const [todos, setTodos] = React.useState([
    { title: 'Title1', content: 'Content1', isDone: false },
    { title: 'Title2', content: 'Content2', isDone: true },
    { title: 'Title3', content: 'Content3', isDone: false },
  ]);

  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');

  enum TodoType {
    Working = "Working",
    Done = "Done"
  }
  const workingDone = [TodoType.Working, TodoType.Done];

  const addTodo = (title: string, content: string) => {
    setTodos([...todos, { title: title, content: content, isDone: false }]);
    setTitle('');
    setContent('');
  }

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <p style={{marginLeft: "10px"}}>My Todo List</p>
        </header>
        <body className="App-body">
          <div className="App-body-input" style={{paddingLeft: "30px"}}>
            <h4>Title</h4>
            <AppInput value={title} onChange={setTitle}/>
            <h4>Content</h4>
            <AppInput
              value={content}
              onChange={setContent}
              onPressEnter={() => {addTodo(title, content)}}
            />
            <div style={{display: "flex", justifyContent: "flex-end", width: "100%"}}>
              <AppButton
                onClick={() => {addTodo(title, content)}}
                backgroundColor="seagreen"
                color="white"
              >Add</AppButton>
            </div>
          </div>
          {workingDone.map((item, index) => {
            const isWorking = item === TodoType.Working;

            return (
              <div className={"App-body-todolist"}>
                <h2>{item + ".."}</h2>
                <div className={"App-card-list"}>
                  {todos.map((todo, index) => {
                    if (todo.isDone === !isWorking) {
                      return (
                        <TodoCard
                          key={index}
                          index={index}
                          title={todo.title}
                          content={todo.content}
                          isDone={todo.isDone}
                          onClickDelete={(index: number) => {
                            const newTodos = todos.filter((_, i) => i !== index);
                            setTodos(newTodos);
                          }}
                          onClickDoneCancel={(index: number) => {
                            const newTodos = todos.map((t, i) => {
                              if (i === index) {
                                return { ...t, isDone: !t.isDone }
                              }
                              return t;
                            });
                            setTodos(newTodos);
                          }}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </body>
      </div>
    </div>
  );
}

const TodoCard = (props: {
  index: number,
  title: string,
  content: string,
  isDone: boolean,
  onClickDelete: (index:number) => void,
  onClickDoneCancel: (index: number) => void
}) => {
  return (
    <AppCard>
      <h2>{props.title}</h2>
      <div>{props.content}</div>
      <div style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "stretch",
        marginTop: "10px"
      }}>
        <AppButton
          onClick={() => { props.onClickDelete(props.index) }}
          border={2}
          borderColor="red"
          backgroundColor="white"
          style={{fontWeight: "normal"}}
        >
          Delete
        </AppButton>
        <AppButton
          onClick={() => { props.onClickDoneCancel(props.index) }}
          border={2}
          borderColor="seagreen"
          backgroundColor="white"
          style={{fontWeight: "normal"}}
        >
          {props.isDone ? "Cancel" : "Done"}
        </AppButton>
      </div>
    </AppCard>
  );
}

export default App;
