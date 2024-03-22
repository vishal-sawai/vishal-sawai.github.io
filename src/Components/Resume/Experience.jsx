import Timeline from "./Timeline"
export const Experience = ({ timeline }) => {
    return (
        <>
            {/* Timeline for education */}
            <div className="w-auto xl:mx-5">
                <h1 className="lg:text-2xl text-lg font-bold text-slate-400 uppercase">Experience</h1>
                <div className="timeline">
                    {(timeline && Array.isArray(timeline.resume) ? timeline.resume : []).filter(item => item.forEducation === false).map((data, index) => {
                        return (
                            <>
                                <Timeline key={index}
                                    company_name={data.company_name}
                                    jobTitle={data.jobTitle}
                                    summary={data.summary}
                                    startDate={data.startDate}
                                    endDate={data.endDate}
                                    bulletPoints={data.bulletPoints}
                                    id={data._id}
                                />
                            </>
                        )
                    })}
                </div>
            </div>


        </>
    )
}

export default Experience