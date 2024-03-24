import Eduction from "./Eduction"
import Experience from "./Experience"
import Heading from "../Heading"
const index = (resume) => {
    return (
        <div id="Resume" className="bg-gray-50 flex justify-center py-10 overflow-x-hidden">
            <div>
                <div className="md:px-10 px-5">
                    {/* Heading */}
                    <Heading title="Resume" />

                    {/* Eduction and Experience */}
                    <div className="flex flex-wrap xl:flex-nowrap justify-between px-3 lg:px-10">
                        <Experience timeline={resume} />
                        <Eduction timeline={resume} />
                    </div>


                </div>
            </div>
        </div>
    )
}

export default index
