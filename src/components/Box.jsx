import '../App.css'
const Box = (props) => {
    return (

        <div className={"w-72 h-80 flex justify-center mt-5 text-white"}>
            <div className={"bg-yellow-400 w-48 h-56 flex flex-col ju rounded-3xl shadow-sm shadow-gray-500"}>
                <img className={"rounded-3xl w-24 h-24 flex pt-2 pl-2"} src="/images/IMG_2638.JPG" alt="Image"/>
                <header className={"font-bold text-3xl pt-3 pl-2"}>
                    {props.header}macchiato</header>
                <p className={"text-xl pt-1 pl-2"}>
                    Freshly ground espresso
                    Cold milk
                </p>
                <div className={""}></div>
            </div>

            {/*<img id={"box"} className={""} src="/images/yellow.png" alt="Image"/>*/}
        </div>
    )
}
export default Box;
