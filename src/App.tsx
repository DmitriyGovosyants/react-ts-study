import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TodosPage from "./ulbitv/components/TodosPage";
import UsersPage from "./ulbitv/components/UsersPage";
import HomePage from "./ulbitv/components/HomePage";
import SharedLayout from "./ulbitv/components/SharedLayout";
import UserItemPage from "./ulbitv/components/UserItemPage";
import TodoItemPage from "./ulbitv/components/TodoItemPage";
import EventsPage from "./ulbitv/components/EventsPage";
import BaseOne from "./webdev/components/BaseOne";
import BaseTwo from "./webdev/components/BaseTwo";
import Function from "./webdev/components/Function";
import Object from "./webdev/components/Object";
import ClassType from "./webdev/components/ClassType";
import GenericType from "./webdev/components/GenericType";
import UtilityTS from "./webdev/components/UtilityTS";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={'/ulbi-tv'}>
            <Route path={'events'} element={<EventsPage/>} />
            <Route path={'users'} element={<UsersPage/>} />
            <Route path={'todos'} element={<TodosPage />} />
            <Route path={'users/:id'} element={<UserItemPage />} />
            <Route path={'todos/:id'} element={<TodoItemPage/>} />
          </Route>
          <Route path={'/webdev'}>
            <Route path={'base1'} element={<BaseOne />} />
            <Route path={'base2'} element={<BaseTwo />} />
            <Route path={'function'} element={<Function />} />
            <Route path={'object'} element={<Object />} />
            <Route path={'class'} element={<ClassType />} />
            <Route path={'generic'} element={<GenericType />} />
            <Route path={'utility'} element={<UtilityTS />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;