const Header = (props) => {
    return (
        <div className={"flex flex-row items-center"}>
            <div className={"basis-2/12"}></div>
    <header className={"font-extrabold text-5xl my-5 basis-6/12"}> Fillo Cafe</header>
            <a className={"basis-3/12 text-yellow-400 text-xl font-bold"}> Order Now!</a>
            <button className={"basis-2/12 bg-black text-white rounded-full w-14 h-12 mr-2 hover:bg-red-600"}> sign in</button>
            <div className={"basis-1/12"}></div>

        </div>
    )
}
export default Header;