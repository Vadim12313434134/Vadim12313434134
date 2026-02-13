import './Second.css'
import toji from './gif/toji.gif'
import kit from './gif/kit.gif'
import snow from './gif/snow.gif'
import ha from './gif/ha.gif'
export function SecondPage(){
    return(
        <>
        <div className="Main-div">
                    
                    <div className="content-2">
                        <div className='gap'>
                        <h1 className='text-2'>❤️С Днём Святого❤️ Валентина!!!!</h1>
                        <div className='gifs'>
                        <img className='toji' src={toji} />
                        <img className='toji' src={kit} />
                        </div>
                         <div className='gifs-2'>
                        <img className='toji' src={snow} />
                        <img className='toji' src={ha} />
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}