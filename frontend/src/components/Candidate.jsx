import '../styles/candidate.css'
import {ImArrowLeft} from 'react-icons/im'

const Candidate = ({_id, image, logo, name, party, handleClick}) => {
    return <div className="candidate">
        <div className="image-container">
            <img className='image' src={image} alt="candidate" />
            <img className='logo' src={logo} alt="logo" />
        </div>
        <div className="info-container">
            <p>Candidate Name: {name}</p>
            <p>Representing Party: {party}</p>
        </div>
        <div className="btn-container">
            <button onClick={() => handleClick(_id)}><ImArrowLeft /></button>
        </div>
    </div>
}

export default Candidate