import "animate.css";
const ExtraSection = () => {
    return (
        <section className="bg-white dark:bg-gray-900 my-10 animate__animated animate__fadeInLeft">
        <div className="relative flex">
            <div className="min-h-screen lg:w-1/3"></div>
            <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>
    
            <div
                className="container flex flex-col justify-center w-full min-h-screen px-6 mx-auto lg:absolute lg:inset-x-0">
    
                <div className="mt-10 lg:flex lg:items-center">
                    <img className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96" src="https://i.ibb.co/p21xqs6/pexels-chanwalrus-941861.jpg" alt=""/>
    
                    <div className="mt-8 lg:px-10 lg:mt-0">
                        <h1 className="text-2xl font-semibold text-rose-400 dark:text-white border-b text-center p-2 border-rose-400">
                        THE CITY IS DINING ROOM
                        </h1>
    
                        <p className=" text-center mt-6 text-gray-500 dark:text-gray-400 border-b pb-3 border-rose-400">
                            Influenced by USA is rich bounty and curated by Toronto is grand downtown manor house, REIGN serves sophisticated cuisine, prestigious wine, and inspiring moments at the heart of a city landmark.
                        </p>
                        <div className="flex justify-center">
                        <button className="px-5 py-3 rounded-lg text-sm font-medium border-b border-t mt-10  border-rose-400 text-rose-400 hover:bg-rose-400 hover:text-white hover:border-none">RESTAURANT</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default ExtraSection;