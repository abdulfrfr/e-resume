import hero from './hero.jpg'

function Hero (){
    return(
        <section>
            <div className="flex justify-start items-center pt-5 pb-5">
                <div className=" w-56 h-52 mr-5">
                    <img className='rounded-[50%] object-cover' src={hero} alt=""/>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold text-white mb-5">ABDULSALAM ABDULRAZAQ</h1>
                    <p className="text-gray-500 text-sm mb-5">Software Engineer, Cloud/DevOps Engineer and Open Source Contributor</p>
                    <p>&#128073; abdulmails112@gmail.com</p>
                </div>
            </div>
            <div className="flex justify-between items-center text-gray-500 text-lg py-2">
                <a href="">LindIn</a>
                <a href="">Twitter</a>
                <a href="">Instagram</a>
                <a href="">YouTube</a>
            </div>
        </section>
    )
}

export default Hero