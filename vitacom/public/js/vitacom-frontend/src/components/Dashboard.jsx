import { useParams, Link } from "react-router-dom"

function DashboardComponent(){
    const {username} =useParams()
    return(
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                View your vitals - <Link to="/vitals">Go here</Link>
            </div>
        </div>
    )
}

export default DashboardComponent