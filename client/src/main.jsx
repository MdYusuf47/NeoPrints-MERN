import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import React from "react";
// import Homepage from "./routes/homepage/Homepage.jsx";
// import CreatePage from "./routes/createPage/CreatePage.jsx";
// import PostPage from "./routes/postPage/PostPage.jsx";
// import AuthPage from "./routes/authPage/AuthPage.jsx";
// import ProfilePage from "./routes/profilePage/ProfilePage.jsx";
// import SearchPage from "./routes/searchPage/SearchPage.jsx";
import MainLayout from "./routes/layout/mainLayout.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const Homepage = React.lazy(() => import("./routes/homepage/Homepage.jsx"))
const CreatePage = React.lazy(() => import("./routes/createPage/CreatePage.jsx"));
const PostPage = React.lazy(() => import("./routes/postPage/PostPage.jsx"));
const AuthPage = React.lazy(() => import("./routes/authPage/AuthPage.jsx"));
const ProfilePage = React.lazy(() => import("./routes/profilePage/ProfilePage.jsx"));
const SearchPage = React.lazy(() => import("./routes/searchPage/SearchPage.jsx"));


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/pin/:id" element={<PostPage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
