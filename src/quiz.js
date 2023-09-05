import { useState } from 'react';
import data from './data.js';
import './App.css';

function Quiz(){

    const [qusno, setQusno] = useState(0);
    const [result, setResult] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleClick = (selected)=>{
        if ( data[qusno].Answer === data[qusno][selected] ) 
         setResult(result => result + 1);

        if(qusno === 14) {
            setShowResult(true); return;
        }
         setQusno(qusno => qusno + 1);
    }

    const handleRestart = ()=>{
        setQusno(0); setResult(0); setShowResult(false);
    }

    return(
        <>
         { showResult ?
         ( <div className='result-wrp'>
            <h2 className='header'>Your Score: </h2>
            <p>{result} out of 10</p>
            <p>{ Math.round(result*100 / (qusno+1)) }%</p>
             <button onClick={handleRestart} className='restart-btn'>Restart</button>
         </div>
         ):
         ( <div className='qus-wrp'>
             <h2>Quiz App</h2>
         <div className='qus-container'>
            <h4 className='qusno'>Question {qusno + 1}/15</h4>
            <h4  className='qus'>{data[qusno].qus}</h4>
            <div className='qus-row1'>
                <p onClick={()=>{ handleClick('option1') }}>{data[qusno].option1}</p>
                <p onClick={()=>{ handleClick('option2') }}>{data[qusno].option2}</p>
            </div>
            <div className='qus-row2'>
                <p onClick={()=>{ handleClick('option3') }}>{data[qusno].option3}</p>
                <p onClick={()=>{ handleClick('option4') }}>{data[qusno].option4}</p>
            </div>
            <button onClick={()=>{ setShowResult(true); setQusno(0); }} className='finish-btn'>finish Quiz</button>
         </div>
          </div> )
        }
        </>
    );
}
export default Quiz;