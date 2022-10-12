
function Quiz({ data }) {
    const { logo, name } = data
    return (
        <div className='my-5'>
            <div>
                <img className="bg-dark" src={logo} alt="" />
                <div className="my-5">
                    <h3>{name}</h3>
                    <button className="btn btn-primary">Start quiz</button>
                </div>
            </div>
        </div>
    );
}

export default Quiz;