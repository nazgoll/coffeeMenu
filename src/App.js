import {useState} from "react"
import Header from "./components/Header";
import Box from "./components/Box";
import MoreInfo from "./components/MoreInfo";

function App() {
    return (
        <>
            <div className={" flex flex-col"}><Header/></div>
            <div className={" flex flex-row h-screen w-screen "}>
                <div className={"basis-2/12"}></div>
                <div className={"basis-2/12 flex justify-center"}>
                    <Box headerText={"Members"}/>
                </div>
                <div className={"flex flex-col basis-7/12 items-center "}>
                    <div className={" flex flex-row mt-10 mb-7"}>
                        <p className={"text-gray-400 hover:text-yellow-400 font-bold text-xl px-10"}> Coffe </p>
                        <p className={"text-gray-400 hover:text-yellow-400 font-bold text-xl px-10"}> Tea </p>
                        <p className={"text-gray-400 hover:text-yellow-400 font-bold text-xl px-10"}> MilkShake </p>
                    </div>
                    <div className={" h-3/4 w-4/5 border-t-4 border-gray-400 border-b-4"}>
                    <MoreInfo  header/>
                    </div>
                    <div className={"basis-1/12"}></div>

                </div>
            </div>

        </>
    )
}

export default App






