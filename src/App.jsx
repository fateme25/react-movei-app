import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {Toaster} from "react-hot-toast"

import Home from "./pages/home";
import SearchMovieList from "./components/navbars/SearchMovieList";
import SearchResult from "./components/navbars/SearchResult";
import { AuthProvider } from "./context/AuthContext";
import Login from "./features/Authentication/Login";
import Register from "./features/Authentication/Register";
import ResetPassword from "./features/Authentication/ResetPassword";
import WatchList from "./components/watchlist/WatchList";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchMovieList />} />
              <Route path="/search/:movieId" element={<SearchResult />} />
              <Route path="/watchList" element={<WatchList />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="reset-password" element={<ResetPassword />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>

        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "18px",
              maxWidth: "500px",
              padding: "16px 24px",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
