import { useState } from 'react'
import Navbar from '../components/Navbar'
import Ratedlimited from '../components/Ratedlimited'

const Homepage = () => {

    const [IsRatedlimited, setRatelimited] = useState(false);


    return (
        <div className="min-h-screen">
            <Navbar />

            {
                IsRatedlimited && <Ratedlimited />
            }
        </div>
    )
}

export default Homepage
