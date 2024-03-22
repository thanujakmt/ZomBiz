
export default function Pricing(props) {
    return (
        <>
            <div className="basics hover:shadow-2xl pb-5 my-5 w-[270px] transition-all ease-in-out duration-700 opacity-50 hover:opacity-100">
                <div className="amount flex items-center justify-center py-[20px] bg-purple">
                    <ul className="text-white flex-col flex items-center justify-center">
                        <li className="m-2 text-2xl font-medium">{props.data.pricingtype}</li>
                        <li className="m-2 gap-1 flex font-serif"><div className="pb-[1px]">$</div><span className="text-3xl">{props.data.price}</span></li>
                        <li className="m-2 text-2xl font-[300]">Monthly</li>
                    </ul>
                </div>
                <div className="explaination flex flex-col">
                    <ul className=" text-gray text-center text-lg">
                        <li className="m-4">{props.data.item}</li>
                        <li className="m-4">{props.data.item1}</li>
                        <li className="m-4">{props.data.item2}</li>
                        <li className="m-4">Complete Statistics</li>
                        <li className="m-4">{props.data.item3}</li>
                    </ul>
                </div>
                <div className="signup flex justify-center my-4   ">
                    <a href="" className="bg-purple w-40 p-2 py-3 text-center border text-white hover:bg-white hover:text-light_purple">Sign Up Now</a>
                </div>
            </div>
        </>
    )
}