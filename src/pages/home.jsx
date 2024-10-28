import TopBar from "../components/navbars/topBar"
import Footer from "../components/ui/Footer"
import Banner from "../components/ui/Banner"

function Home() {

    return (
        <>
            <div className="relative">
                {/* The topbar component goes here */}
                <TopBar
                home={true} />

                {/* The banner component goes here */}
                <Banner />

                {/* The coming soon component goes here */}

                {/* The opening this week component goes here */}

                {/* The in theather component goes here */}

                {/* The footer component goes here */}
                <Footer />

            </div>
        </>
    )
}


export default Home