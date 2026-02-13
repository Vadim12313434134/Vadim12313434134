import './Main.css'
import envelape from './svg/envelape.svg'

export function MainPage(){
    return(
        <>
        <div className="Main-div">
            
            <div className="content">
                <img className='svg' src={envelape} />
                <div className='gap'>
                <h1 className='text'>Валентинка</h1>
                <button className='btn'>Открыть</button>
                </div>
            </div>
        </div>

        
        </>
    )
}

