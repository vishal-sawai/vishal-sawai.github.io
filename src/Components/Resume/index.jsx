import Eduction from "./Eduction"
import Experience from "./Experience"
const index = (resume) => {
    return (
        <div className="bg-gray-50 flex justify-center py-10">
            <div>
                <div className="md:px-10 px-5">
                    <div>
                        <h1 className="text-2xl font-bold text-red-600 my-5 text-center">Resume</h1>
                    </div>

                    {/* Eduction and Experience */}
                    <div className="flex flex-wrap lg:flex-nowrap justify-between px-3 lg:px-10">
                        <Experience timeline={resume} />
                        <Eduction timeline={resume} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default index
