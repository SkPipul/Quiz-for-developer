import { Link } from "react-router-dom";

function Quiz({ data }) {
    const { id, logo, name } = data
    return (
        <div className='my-5'>
            <div>
                <img className="bg-dark" src={logo} alt="" />
                <div className="mt-2 d-flex justify-content-center">
                    <h3 className="mx-5">{name}</h3>
                    <Link to={`/quiz/${id}`}>
                        <button className="btn btn-primary">Start quiz</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Quiz;