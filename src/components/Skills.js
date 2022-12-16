import { BsCheck2 } from 'react-icons/bs'

function Skills(){
    return(
        <section className="mt-10">
            <div>
                <h1 className="md:text-2xl text-lg text-center md:text-start font-bold mb-5">Skills and Qualifications</h1>

                <div className='flex justify-center items-center '>
                    <ul>
                        <li className='text-md md:text-md flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>1Year experience in frontend dev.</li>
                        <li className='text-md md:text-md flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>Proficiency with containerization.</li>
                        <li className='text-md md:text-md flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>Cloud architecture using AWS</li>
                        <li className='text-md md:text-md flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>Linux and Networking</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Skills