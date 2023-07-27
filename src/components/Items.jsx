const Order = ({ title, item }) => (
    <div className="flex flex-col items-center justify-start basis-4/5 border-r-4 my-10">
        <header className="bg-amber-400 rounded-lg text-xl font-semibold w-11/12 m-5 flex items-center justify-center h-10">
            {title}
        </header>
        {item && (
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-lg">{item.price}</p>
            </div>
        )}
    </div>
);
export default Order;