import { BsCheck2 } from 'react-icons/bs'

function Skills(){
    return(
        <section className="mt-10">
            <div>
                <h1 className="text-2xl font-bold mb-5">Skills and Qualifications</h1>

                <div className='flex justify-center items-center '>
                    <ul>
                        <li className='flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>  1 Year experience with frontend developement using react and tailwind css.</li>
                        <li className='flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>  Proficiency with containerization using docker and kubernetes</li>
                        <li className='flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>  Cloud architecture using AWS</li>
                        <li className='flex justify-start items-center mb-2 text-gray-500'><BsCheck2 className="text-green-500 mr-2"/>  Linux and Networking</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Skills