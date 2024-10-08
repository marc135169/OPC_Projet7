import { Outlet } from "react-router-dom";
import Header from "./Components/Common/Header.jsx";
import Footer from "./Components/Common/Footer.jsx";

export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
