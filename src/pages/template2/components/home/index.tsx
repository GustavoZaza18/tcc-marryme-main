import { Header } from "../header";
import '../../../global.css'
import { Counter } from "../counter";

export function Home() {
    const eventDate = '2024-11-27T11:30:00';
    const { days, hours, minutes, seconds } = Counter(eventDate);

    return (
        <>
            <div className="h-[100vh] flex items-center flex-col bg-[url('@/assets/img/fundocasamento.png')] bg-no-repeat bg-center bg-cover">
                <header>
                    <Header />
                </header>
                
                <div className=" h-[100vh] flex flex-col items-center justify-center text-green-900">
                    <h1 className='font-rds text-green-900 h-35 text-8xl'> André & Camila</h1>      
                    <div className="flex flex-col justify-center items-center w-96">
                        <div className="flex gap-2">
    
                            <div className="h-20 w-20 border-[2px] rounded-xl text-green-900 border-green-900 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl">{days}</h2>
                                <h1>Dias</h1>

                            </div>
                            <div className="h-20 w-20 border-[2px] rounded-xl text-green-900 border-green-900 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl ">{hours}</h2>
                                <h1>Horas</h1>
                                
                            </div>
                            <div className="h-20 w-20 border-[2px] rounded-xl text-green-900 border-green-900 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl ">{minutes}</h2>
                                <h1>Minutos</h1>

                            </div>
                            <div className="h-20 w-20 border-[2px] rounded-xl text-green-900 border-green-900 flex items-center justify-center flex-col ">
                                
                                <h2 className="text-5xl">{seconds} </h2>
                                <h1>Segundos</h1>
                            </div>
                            
                        </div>

                    </div>
                
                </div>
            </div>
            
        </>
    );
}
