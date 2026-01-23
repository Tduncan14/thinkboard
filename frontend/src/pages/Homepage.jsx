import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Ratedlimited from '../components/Ratedlimited'
import axios from 'axios'
import toast from 'react-hot-toast'

const Homepage = () => {

    const [IsRatedlimited, setRatelimited] = useState(false);
    const [notes, setNotes] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {

        const fetchNotes = async () => {

            try {

                const res = await axios.get("http://localhost:5000/api/notes")
                console.log(res.data, 'this is the data')
                // const res = await fetch('http://localhost:5001/api/notes')
                // const data = await res.json()
                setNotes(res.data)
                setRatelimited(false)
                console.log(res.data)

            }

            catch (err) {
                console.log(err, 'this is the error')

                if (err.response.status === 429) {
                    setRatelimited(TRUE)
                }
                else {
                    toast.error('Failed to load data')
                }
            }

            finally {
                setLoading(false)
            }

        }


        fetchNotes();

    }, [])


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
