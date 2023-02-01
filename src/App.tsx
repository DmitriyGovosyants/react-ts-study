import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import TodosPage from "./components/TodosPage";
import UsersPage from "./components/UsersPage";
import HomePage from "./components/HomePage";
import SharedLayout from "./components/SharedLayout";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<SharedLayout />}>
          <Route index element={<HomePage/>} />
          <Route path={'/users'} element={<UsersPage/>} />
          <Route path={'/todos'} element={<TodosPage />} />
          <Route path={'/users/:id'} element={<UserItemPage />} />
          <Route path={'/todos/:id'} element={<TodoItemPage/>} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;