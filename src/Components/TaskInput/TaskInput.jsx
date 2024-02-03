// /* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
// import styles from "./TaskInput.module.css";
// import bannerImage from "../../assets/Images/banner.gif";
// import { useState } from "react";
// import TasksList from "./../TasksList/TasksList";
// import addTodoImage3 from "../../assets/Images/todo list gif.gif";
// import emptyBox from "../../assets/Images/empty box.gif";
// import { v4 as uuidv4 } from 'uuid';

// const TaskInput = () => {
//   const [task, setTask] = useState("");
//   const [tasksList, setTasksList] = useState([]);
//   const [isEditTask, setisEditTask] = useState(false);
//   const [updateTask, setUpdateTask] = useState(0);

//   const taskHandling = (e) => {
//     e.preventDefault();
//     const newTask = {
//       id: uuidv4(),
//       text: task,
//       time: new Date().getTime(),
//     };

//     setTasksList([...tasksList, newTask]);
//     setTask("");
//   };

//   //Edit task
//   const eiteTask = (id) => {
//     const editItem = tasksList.find((value, index) => id === index);
//     setTask(editItem);
//     setisEditTask(true);
//     setUpdateTask(id);
//   };

//   // Udate Task
//   const updateSignleTask = (e) => {
//     e.preventDefault();
//     if (task.trim() !== "") {
//       tasksList[updateTask] = task;
//       setisEditTask(false);
//       setTask("");
//     } else {
//       alert("Please! Enter your task.");
//     }
//   };

//   // Delete Task
//   const deleteTask = (id) => {
//     const deleteItem = tasksList.filter((value, index) => id !== index);
//     setTasksList(deleteItem);
//   };

//   return (
//     <div>
//       <div className={styles.addTodo_Section}>
//         <div className={styles.addTodo_Content}>
//           <div className={styles.addTodo_Input}>
//             <div className={styles.addTodo_Title}>
//               <h3>Add your Task:</h3>
//             </div>
//             <div className={styles.addTodo_Form}>
//               <form onSubmit={isEditTask ? updateSignleTask : taskHandling}>
//                 <input
//                   type="text"
//                   value={task}
//                   onChange={(e) => setTask(e.target.value)}
//                   placeholder="Enter Your Task"
//                   autoFocus
//                 />
//                 <button className={styles.addBtn}>
//                   {isEditTask ? "Update Task" : "Add Task"}
//                 </button>
//               </form>
//             </div>
//           </div>

//           <div className={styles.addTodo_Banners}>
//             <img src={bannerImage} alt="Banner-Image" />
//           </div>
//         </div>
//       </div>

//       <div className={styles.tasks_list_management}>
//         {/* <img src={addTodoImage3} alt="" /> */}
//         <ol className={styles.tasks_list}>
//           <div className={styles.tasks_list_title}>
//             <h1>Your Most importent Tasks List:</h1>
//           </div>

//           {tasksList && tasksList.length > 0 ? (
//             tasksList.map((data, index) => (
//               <div key={index}>
//                 <TasksList
//                   data={data}
//                   index={index}
//                   deleteTask={deleteTask}
//                   editTask={eiteTask}
//                   updateSignleTask={updateSignleTask}
//                 />
//               </div>
//             ))
//           ) : (
//             <div className={styles.emptyBox}>
//               <h3>Empty Tasks Box</h3>
//               <div className={styles.emptyBoxImage}>
//                 <img src={emptyBox} alt="Empty Tasks Box" />
//               </div>
//             </div>
//           )}
//         </ol>
//       </div>
//     </div>
//   );
// };

// export default TaskInput;

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import styles from "./TaskInput.module.css";
import bannerImage from "../../assets/Images/banner.gif";
import TasksList from "./../TasksList/TasksList";
import addTodoImage3 from "../../assets/Images/todo list gif.gif";
import emptyBox from "../../assets/Images/empty box.gif";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const [tasksList, setTasksList] = useState([]);

  const taskHandling = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: task,
      date: new Date(),
    };

    setTasksList([...tasksList, newTask]);
    setTask("");
  };

  /// Update Task
  const updateSingleTask = (id, updatedText) => {
    const updatedTasks = tasksList.map((task) =>
      task.id === id ? { ...task, text: updatedText } : task
    );

    setTasksList(updatedTasks);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasksList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div id="addTask">
      <div className={styles.addTodo_Section}>
        <div className={styles.addTodo_Content}>
          <div className={styles.addTodo_Input}>
            <div className={styles.addTodo_Title}>
              <h3>Add your Task:</h3>
            </div>
            <div className={styles.addTodo_Form}>
              {/* <form onSubmit={isEditTask ? updateSingleTask : taskHandling}> */}
              <form onSubmit={taskHandling}>
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder="Enter Your Task"
                  autoFocus
                />
                <button className={styles.addBtn}>Add Task</button>
              </form>
            </div>
          </div>

          <div className={styles.addTodo_Banners}>
            <img src={bannerImage} alt="Banner-Image" />
          </div>
        </div>
      </div>
      <div id="tasksList">
        <div className={styles.tasks_list_management}>
          <ol className={styles.tasks_list}>
            <div className={styles.tasks_list_title}>
              <h1>Your Most important Tasks List:</h1>
            </div>

            {tasksList && tasksList.length > 0 ? (
              tasksList.map((data) => (
                <div key={data.id}>
                  <TasksList
                    data={data.text}
                    date={format(new Date(data.date), "MM/dd/yyyy HH:mm:ss")}
                    deleteTask={() => deleteTask(data.id)}
                    updateSingleTask={updateSingleTask}
                    id={data.id}
                  />
                </div>
              ))
            ) : (
              <div className={styles.emptyBox}>
                <div className={styles.emptyBoxImage}>
                  <img src={emptyBox} alt="Tasks Box Is Empty" />
                </div>
              </div>
            )}
          </ol>
        </div>
      </div>
      {/* <div className={styles.tasks_list_management}>
        <ol className={styles.tasks_list}>
          <div className={styles.tasks_list_title}>
            <h1>Your Most important Tasks List:</h1>
          </div>

          {tasksList && tasksList.length > 0 ? (
            tasksList.map((data) => (
              <div key={data.id}>
                <TasksList
                  data={data.text}
                  date={format(new Date(data.date), "MM/dd/yyyy HH:mm:ss")}
                  deleteTask={() => deleteTask(data.id)}
                  updateSingleTask={updateSingleTask}
                  id={data.id}
                />
              </div>
            ))
          ) : (
            <div className={styles.emptyBox}>
              <h3>Tasks Box Empty</h3>
              <div className={styles.emptyBoxImage}>
                <img src={emptyBox} alt="Tasks Box Is Empty" />
              </div>
            </div>
          )}
        </ol>
      </div> */}
    </div>
  );
};

export default TaskInput;
