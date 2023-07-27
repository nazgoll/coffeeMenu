const MoreInfo = (props) => {
    return (

<div class={"flex flex-row pt-10"}>
    <div className={"flex flex-col ml-6 basis-1/2 "}>
<header className={"text-4xl mt-16 font-extrabold"}> macchiato </header>
        <p className={"pt-10 text-2xl font-bold"}> 20$ </p>
        <h3 className={"pt-10 font-bold"}> Ingrediants </h3>
        <p className={"pt-8 font-bold pr-5"}>     18g ground espresso, or 1 espresso pod
            50-100ml milk (or the minimum amount your machine will work with)
        </p>
        <div className={"bg-yellow-400 rounded-3xl flex flex-row gap-10 w-40 h-16 justify-center items-center mt-16 shadow-black shadow-sm "}>
            <button className={"text-white text-4xl"}>-</button>
            <p className={"text-3xl"}>1</p>
            <button className={"text-white text-3xl"}>+</button>

        </div>

    </div>
    <div className={"flex flex-col items-center basis-1/2"}>
        <div> <img src="/images/IMG_2636.JPG" alt="Image" className={"h-96 w-96 rounded-2xl mt-5 mx-3 shadow-black shadow-sm"}/> </div>
<div className={"flex flex-row "}>
    <img src="/images/IMG_2637.JPG" alt="Image" className={"h-32 w-28 rounded-2xl mt-4 mx-3 shadow-black shadow-lg"}/>
    <img src="/images/IMG_2639.JPG" alt="Image" className={"h-32 w-28 rounded-2xl mt-4 mx-3 shadow-black shadow-lg"}/>
    <img src="/images/IMG_2635.JPG" alt="Image" className={"h-32 w-28 rounded-2xl mt-4 mx-3 shadow-black shadow-lg"}/>

</div>
    </div>
</div>
    )
}

export default MoreInfo;