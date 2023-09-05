import { useNavigate } from 'react-router-dom';

function Home(){
    const navigate = useNavigate();

    return(
        <div className='main'>
        <h3>Quiz Instructions: </h3>
        <p>There will be 15 Questions and no time limit</p>
        <p>There will be 1 point for each correct answer</p>
        <p>Maximum Score is 15 points</p>
         <button onClick={()=>{ navigate("/quiz") }} className='getStarted'>Get started</button>
        </div>
    );
}
export default Home;