import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Index";
import  DefaultLayout  from "../layout/DefaultLayout";

function Router(){
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
            </Route>
        </Routes>
    )
}   

export default Router