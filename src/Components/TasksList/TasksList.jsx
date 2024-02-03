/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { useState } from "react";
// import styles from "./TasksList.module.css";
// import { MdDelete } from "react-icons/md";
// import { MdMovieEdit } from "react-icons/md";
// // import { RxUpdate } from "react-icons/rx";

// const TasksList = ({ data, deleteTask, index, editTask, updateSignleTask }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   return (
//     <div>
//       <div className={styles.task_list}>
//         <div className={styles.single_task}>
//           <div className={styles.completeBtnAndData}>
//             <form>
//               <input
//                 className={styles.compledBtn}
//                 title="Completed"
//                 type="checkbox"
//                 onChange={(e) => setIsChecked(e.target.checked)}
//                 value={isChecked}
//               />
//             </form>

//             <div className={Symbol.checkingTask}>
//               {isChecked ? (
//                 <div
//                   style={{
//                     textDecoration: isChecked ? "line-through" : "none",
//                     color: isChecked ? "#B9B4C7" : "white",
//                   }}
//                 >
//                   <div className={styles.data}>
//                     <span>{data}</span>
//                   </div>
//                 </div>
//               ) : (
//                 <div className={styles.data}>
//                   <span>{data}</span>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className={styles.editAndDeleteBtn}>
//             <span
//               className={styles.editBtn}
//               title="Edit"
//               onClick={() => editTask(index)}
//             >
//               <MdMovieEdit />
//             </span>
//             <span
//               className={styles.deleteBtn}
//               title="Delete"
//               onClick={() => deleteTask(index)}
//             >
//               <MdDelete />
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TasksList;

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState } from "react";
import styles from "./TasksList.module.css";
import { MdDelete } from "react-icons/md";
import { LiaEditSolid } from "react-icons/lia";
import { RxUpdate } from "react-icons/rx";

const TasksList = ({ data, date, deleteTask, id, updateSingleTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditTask, setisEditTask] = useState(false);
  const [updateTask, setUpdateTask] = useState(data);

  // Edit Task
  const editingTask = () => {
    setisEditTask(true);
  };

  // Update Task
  const updateTaskFunction = () => {
    updateSingleTask(id, updateTask);
    setisEditTask(false);
  };

  return (
    <div id="tasksList-Section">
      <div className={styles.tasks_list}>
        <div className={styles.single_task}>
          <div className={styles.completeBtnAndData}>
            <form>
              <input
                className={styles.compledBtn}
                title="Completed"
                type="checkbox"
                onChange={(e) => setIsChecked(e.target.checked)}
                value={isChecked}
              />
            </form>
            <div className={Symbol.checkingTask}>
              {isEditTask ? (
                <>
                  <input
                    type="text"
                    value={updateTask}
                    onChange={(e) => setUpdateTask(e.target.value)}
                    autoFocus
                  />
                  <div>{date}</div>
                </>
              ) : (
                <div className={styles.dateAndData}>
                  <div
                    className="taskElement"
                    style={{
                      textDecoration: isChecked ? "line-through" : "none",
                      color: isChecked ? "#B9B4C7" : "black",
                    }}
                  >
                    <div className={styles.data}>
                      <span>{data}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className={styles.dateAndEditAndDeleteBtn}>
          <div className={styles.date}>{date}</div>
            {isEditTask ? (
              <span title="Update" className={styles.updateBtn} onClick={updateTaskFunction}>
                <RxUpdate />
              </span>
            ) : (
              <span title="Edit" className={styles.editBtn} onClick={editingTask}>
                <LiaEditSolid />
              </span>
            )}

            <span title="Delete" className={styles.deleteBtn} onClick={deleteTask}>
              <MdDelete />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksList;
