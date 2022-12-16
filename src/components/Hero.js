import hero from './hero.jpg'

function Hero (){
    return(
        <section>
            <div className="flex flex-col justify-start items-center pt-5 pb-5 md:flex-row ">
                <div className="md:w-56 md:h-52 mr-5 w-36 h-36">
                    <img className='rounded-[50%] object-cover' src={hero} alt=""/>
                </div>
                <div>
                    <h1 className="mt-3 md:mt-0 md:text-3xl md:text-start text-xl text-center text-md font-semibold text-white mb-5">ABDULSALAM ABDULRAZAQ</h1>
                    <p className="text-gray-500 text-sm mb-5 text-center md:text-start">Software Engineer, Cloud/DevOps Engineer and Open Source Contributor</p>
                    <p className='text-center md:text-start'>&#128073; abdulmails112@gmail.com</p>
                </div>
            </div>
            <div className="flex justify-between items-center text-gray-500 text-sm py-2 md:text-lg">
                <a href="https://www.github.com/abdulfrfr">GitHub</a>
                <a href="https://www.twitter.com/andulfrfr">Twitter</a>
                <a href="https://www.instagram.com/abdulfrfr">Instagram</a>
                <a href="https://www.linkedin.com/in/abdulfrfr/">LinkedIn</a>
            </div>
        </section>
    )
}

export default Hero