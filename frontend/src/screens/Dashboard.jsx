import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCandidates, voteCandidate, resetVotes } from '../features/candidate/candidateActions'
import { useEffect } from 'react'
import Error from '../components/Error'
import Candidate from "../components/Candidate"

const Dashboard = () => {
	const { candidates, loading, error } = useSelector(
		(state) => state.candidates
	)

	const dispatch = useDispatch()

	useEffect(() => {
		if (candidates.length < 1) {
			dispatch(getAllCandidates())
		}
	}, [dispatch, candidates])

	const handleClick = (id) => {
		dispatch(voteCandidate(id))
	}

	if (loading) {
		return <h1>Loading...</h1>
	}

	return (
		<>
			<div>

				{error && <Error>{error}</Error>}
			</div>
			<div className="candidate-container">
				{
					candidates?.map(candidate => <Candidate key={candidate._id} {...candidate} handleClick={handleClick} />)
				}
			</div>
		</>
	)
}

export default Dashboard
