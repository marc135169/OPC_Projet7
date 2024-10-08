import { Outlet } from "react-router-dom";
import Header from "./components/Common/Header.jsx";
import Footer from "./components/Common/Footer.jsx";

export default function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
