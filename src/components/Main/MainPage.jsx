import './Main.css'
import envelape from './svg/envelape.svg'
import { Link } from 'react-router-dom'

export function MainPage(){
    return(
        <>
        <div className="Main-div">
            
            <div className="content">
                <img className='svg' src={envelape} />
                <div className='gap'>
                <h1 className='text'>Валентинка <span className='for-you'>для тебя</span></h1>
                <Link to="/SecondPage" ><button className='btn'>Открыть</button></Link>
                </div>
            </div>
        </div>

         
        </>
    )
}

