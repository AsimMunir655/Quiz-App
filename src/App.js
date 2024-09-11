import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import QuizBar from "./components/QuizBar";
import Footer from "./components/Footer";
import {
  BankScreen,
  FavoriteBankScreen,
  HomeScreen,
  LoginScreen,
  ProfileScreen,
  QuestionScreen,
  QuizScreen,
  SearchScreen,
  SignupScreen,
  EditQuizScreen,
} from "./screens";
import ProtectedRouted from "./components/ProtectedRoutes";
import { UserContextProvider } from "./context";
import ProfileCard from "./components/setting/ProfileCard";
import BasicInfo from "./components/setting/BasicInfo";
import Password from "./components/setting/Password";
function App() {
  return (
    <UserContextProvider>
      <QuizBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/" element={<ProtectedRouted />}>
          <Route path="/play" element={<QuestionScreen />} />
          <Route path="/play/:id" element={<QuestionScreen />} />
          <Route path="/create" element={<QuizScreen />} />
          <Route path="/create/:id/edit" element={<EditQuizScreen />} />
          <Route path="/search" element={<SearchScreen />} />
          <Route path="setting" element={<ProfileScreen />}>
            <Route path="profile/:id" element={<ProfileCard />} />
            <Route path="basicinfo/:id" element={<BasicInfo />} />
            <Route path="password/:id" element={<Password />} />
          </Route>
          <Route path="/bank/:id" element={<BankScreen />} />
          <Route
            path="/bank/:id/:keyword/:pageNumber"
            element={<BankScreen />}
          />

          <Route path="/favBank/:id" element={<FavoriteBankScreen />} />
        </Route>
        <Route path="*">404 ERROR: Page does not exists</Route>
      </Routes>
      <Footer />
    </UserContextProvider>
  );
}

export default App;
