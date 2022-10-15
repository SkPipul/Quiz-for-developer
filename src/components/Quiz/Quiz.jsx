import { Link } from "react-router-dom";
import './Quiz.css'

function Quiz({ data }) {
    const { id, logo, name, total } = data
    return (
        <div className='my-5'>
            <div className="logo">
                <img className="bg-dark" src={logo} alt="" />
                <div className="mt-2 my-5 d-flex justify-content-center
                align-items-center logo-item">
                    <h3 className="mx-4">{name}</h3>
                    <h5 className="me-4">Total quiz: {total}</h5>
                    <Link to={`/quiz/${id}`}>
                        <button className="btn btn-primary">Start quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Quiz;