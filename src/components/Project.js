import {GiTrophyCup} from 'react-icons/gi'

function Project(){
    return(
        <section className="mt-10">
            <div>
                <h1 className="text-2xl font-bold mb-5">Projects and Accomplishment</h1>

                <div className='flex justify-center items-center '>

                    <ul>
                        <li className='flex justify-start items-center py-3 border-b-[1px] border-gray-600'><GiTrophyCup className='mr-3 text-yellow-500'/> Developed an Hospital Management Dashboard</li>
                        <li className='flex justify-start items-center py-3 border-b-[1px] border-gray-600'><GiTrophyCup className='mr-3 text-yellow-500'/> Containerized various applications using docker and managed with kubernetes</li>
                        <li className='flex justify-start items-center py-3 border-b-[1px] border-gray-600'><GiTrophyCup className='mr-3 text-yellow-500'/> Made Open source Contributions</li>
                        <li className='flex justify-start items-center py-3 border-b-[1px] border-gray-600'><GiTrophyCup className='mr-3 text-yellow-500'/> Hosted an application on AWS by configuring a virtual network and an instance</li>
                    </ul>
                    
                </div>
            </div>

        </section>
    )
}

export default Project