import React, { useEffect } from "react";
import moment from "moment";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckTask } from "../../../redux/actions/tasks";

const TaskList = ({ tasks }) => {
  const dispatch = useDispatch();

  return (
    tasks &&
    tasks.map((task, index) =>
      task.type == "section" ? (
        <tr key={index} className="bg-gray-200">
          <td
            colSpan="2"
            className="px-8 py-4 font-semibold text-md text-black"
          >
            {task.title}
          </td>
        </tr>
      ) : (
        <tr key={index} className="border-b hover:bg-gray-100 cursor-pointer">
          <td className="pl-4 py-1 w-1">
            <Checkbox
              onClick={() => dispatch(toggleCheckTask(task.id))}
              checked={task.completed}
              color="primary"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </td>
          <td className="pr-8 py-1">
            {task.title}
            {task.dueDate && (
              <span className="float-right text-xs">
                {moment(task.dueDate).format("ll")}
              </span>
            )}
          </td>
        </tr>
      )
    )
  );
};

export default TaskList;
