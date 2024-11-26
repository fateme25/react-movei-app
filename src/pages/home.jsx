import TopBar from "../components/navbars/topBar";
import Footer from "../components/ui/Footer";
import Banner from "../components/ui/Banner";

import MovieList from "../components/movieList/MovieList"
import TheaterInfo from "../components/theater/TheaterInfo"

function Home() {
  return (
    <>
      <div className="relative">
        {/* The topBar component goes here */}
        <TopBar home={true} />

        {/* The banner component goes here */}
        <Banner />

        <main className="container mx-auto mb-52 mt-14">
          <MovieList />
          <TheaterInfo/>
        </main>

        {/* The footer component goes here */}
        <Footer />
      </div>
    </>
  );
}

export default Home;
