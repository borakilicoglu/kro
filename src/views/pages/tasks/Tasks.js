import React, { useCallback, useEffect } from "react";
import Icon from "@material-ui/core/Icon";
import TaskList from "./TaskList";
import { useDispatch, useSelector } from "react-redux";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import { getTasks } from "../../../redux/actions/tasks/index.js";

// Custom Tasks Styles
const drawerWidth = 510;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

// Tasks
const Tasks = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const [searchResults, setSearchResults] = React.useState([]);
  const [data, setData] = React.useState([]);
  const [task, setTask] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    dispatch(getTasks());
    return () => {};
  }, []);

  const { tasks } = useSelector((state) => state.tasks);

  useEffect(() => {
    setIsLoading(true);
    setData(tasks);
    setIsLoading(false);
    return () => {};
  }, [tasks]);

  // const handleChange = (event) => {
  //   setSearchTerm(event.target.value.toLowerCase());
  // };

  // React.useEffect(() => {
  //   const results = tasks.filter((person) =>
  //     person.name.toLowerCase().includes(searchTerm)
  //   );
  //   setSearchResults(results);
  // }, [searchTerm]);

  const handleDrawerOpen = useCallback(
    (contact) => {
      setTask(task);
      setOpen(true);
    },
    [setTask, setOpen]
  );

  const handleDrawerClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    !isLoading && (
      <div className="relative min-h-full flex-auto">
        <div className="flex flex-col w-full absolute inset-0 overflow-hidden">
          <div className="border-r relative flex flex-col overflow-auto flex-grow">
            <div>
              <div className="flex flex-row bg-white w-full px-8 py-10">
                <div class="flex flex-col">
                  <h2 className="text-3xl font-bold pb-0 leading-none">
                    Tasks
                  </h2>
                  <p className="text-gray-700">
                    {data.filter((task) => task.completed == false).length}{" "}
                    remaining tasks
                  </p>
                </div>
                <div className="flex ml-auto items-center">
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center ml-3">
                    <Icon fontSize="small">add</Icon>
                    <span className="ml-2" onClick={handleDrawerOpen}>
                      Add Task
                    </span>
                  </button>
                  <button className="bg-black hover:bg-gray-900 text-white font-normal py-2 pr-4 pl-3 rounded inline-flex items-center ml-3">
                    <Icon fontSize="small">add</Icon>
                    <span className="ml-2" onClick={handleDrawerOpen}>
                      Add Section
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <table className="table-auto w-full bg-white border-t">
                <tbody>
                  <TaskList
                    tasks={data}
                    handleDrawerOpen={handleDrawerOpen}
                    // searchResults={searchResults}
                  />
                </tbody>
              </table>
            </div>
          </div>

          <Drawer
            className={classes.drawer}
            anchor="right"
            open={open}
            onClose={handleDrawerClose}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {/* <Contact close={handleDrawerClose} contact={contact} /> */}
          </Drawer>
        </div>
      </div>
    )
  );
};

export default Tasks;
