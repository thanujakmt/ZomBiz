
import counter from "/images/counter/counter-banner.jpg"
import days from "/images/counter/counter1.png"
import projects from "/images/counter/counter2.png"
import coffee from "/images/counter/counter3.png"
import client from "/images/counter/counter4.png"
import { useState,useEffect } from "react"

function Counter(props) {

    const [daysWorked, setDaysWorked] = useState(0);
    const [projectsFinished, setProjectsFinished] = useState(0);
    const [coffeeCups, setCoffeeCups] = useState(0);
    const [clientsSatisfied, setClientsSatisfied] = useState(0);

        useEffect(() => {
            const intervalId = setInterval(() => {
            setDaysWorked(prevCount => (prevCount < 2556 ? prevCount + 1 : prevCount));
            }, 0.1); 

            return () => clearInterval(intervalId);
            
        }, []);
  
        useEffect(() => {
            const intervalId = setInterval(() => {
            setProjectsFinished(prevCount => (prevCount < 326 ? prevCount + 1 : prevCount));
            }, 30); 

            return () => clearInterval(intervalId);
            
        }, []);

        useEffect(() => {
            const intervalId = setInterval(() => {
              setCoffeeCups(prevCount => (prevCount < 1526 ? prevCount + 1 : prevCount));
            }, 7); 
        
            return () => clearInterval(intervalId);
            
          }, []);

          useEffect(() => {
            const intervalId = setInterval(() => {
            setClientsSatisfied(prevCount => (prevCount < 856 ? prevCount + 1 : prevCount));
            }, 12); 

            return () => clearInterval(intervalId);
            
        }, []);

    return (
        <>
            <div className="counter z-40 py-20 relative flex justify-center items-center h-full">
                <div className="items border- md:columns-4 text-po absolute container flex flex-col gap-7 justify-center items-center  md:flex md:flex-row md:justify-center z-20">
                    <div className="days md:w-[200px] 2xl:w-[300px] border- flex justify-center">
                        <div className="image_box my-2">
                            <img src={days} className="" alt=""/>
                        </div>
                        <div className="worked text-white mx-3 w-[200px] 2xl:w-[200px] md:w-[100px]">
                            <div className="dayscount text-[1.8em]">{daysWorked}</div>
                            <h3 className="text-[1.3em]">Days Worked</h3>
                        </div>
                    </div>
                    <div className="days md:w-[200px] 2xl:w-[300px] flex justify-center">
                        <div className="image_box my-2">
                            <img src={projects} className="" alt=""/>
                        </div>
                        <div className="worked text-white mx-3 w-[200px] 2xl:w-[200px] md:w-[100px]">
                            <div className="dayscount text-[1.8em]">{projectsFinished}</div>
                            <h3 className="text-[1.3em]">Project Finished</h3>
                        </div>
                    </div>
                    <div className="days md:w-[200px] 2xl:w-[300px] flex justify-center">
                        <div className="image_box my-2">
                            <img src={coffee} className="" alt=""/>
                        </div>
                        <div className="worked text-white mx-3 w-[200px] 2xl:w-[200px] md:w-[100px]">
                            <div className="dayscount text-[1.8em]">{coffeeCups}</div>
                            <h3 className="text-[1.3em]">Coffee Cup</h3>
                        </div>
                    </div>
                    <div className="days md:w-[200px] 2xl:w-[300px] flex justify-center">
                        <div className="image_box my-2">
                            <img src={client} className="" alt=""/>
                        </div>
                        <div className="worked text-white mx-3 w-[200px] 2xl:w-[200px] md:w-[100px]">
                            <div className="dayscount text-[1.8em]">{clientsSatisfied}</div>
                            <h3 className="text-[1.3em]">Client Satisfied</h3>
                        </div>
                    </div>
                </div>
                <div className="md:h-[300px] h-[500px] w-full bg-bg_color1 absolute">
                </div>
                <img className="md:h-[300px] h-[500px] w-full" src={counter} />
            </div>
        </>
    )
}

export default Counter