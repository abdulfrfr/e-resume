function Stack(){
    return(
        <section className="mt-10">
            <div>
                <h1 className="md:text-2xl text-lg  font-bold mb-5">Tech Stack</h1>

                <div className='flex justify-start items-center pb-10 flex-wrap'>
                <div className="ml-5 mb-2 flex justify-between items-center w-48 text-sm text-gray-500 border-[1px] border-gray-800 rounded-sm py-1 px-2">
                    <div>JavaScript</div>
                    <div>Node</div>
                    <div>GoLang</div>
                </div>
                <div className="ml-5 mb-2 flex justify-between items-center w-24 text-sm text-gray-500 border-[1px] border-gray-800 rounded-sm py-1 px-2">
                    <div>Bash</div>
                    <div>YAML</div>
                </div>
                <div className="ml-5 mb-2 flex justify-between items-center w-36 text-sm text-gray-500 border-[1px] border-gray-800 rounded-sm py-1 px-2">
                    <div>react</div>
                    <div>tailwindcss</div>
                </div>
                <div className="ml-5 mb-2 flex justify-between items-center w-52 text-sm text-gray-500 border-[1px] border-gray-800 rounded-sm py-1 px-2">
                    <div>AWS</div>
                    <div>Docker</div>
                    <div>kubernetes</div>
                </div>
                    
                </div>
            </div>

        </section>
    )
}

export default Stack