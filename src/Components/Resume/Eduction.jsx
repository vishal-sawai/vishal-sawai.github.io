import Timeline from "./Timeline"
export const Eduction = ({ timeline }) => {
    return (
        <>
            {/* Timeline for education */}
            <div className="mt-20 xl:mt-0 w-auto xl:mx-5">
                <h1 className="lg:text-2xl text-lg font-bold text-slate-400 uppercase">Education</h1>
                <div className="timeline">
                    {(timeline && Array.isArray(timeline.resume) ? timeline.resume : []).filter(item => item.forEducation).map((data, index) => {
                        return (
                            <>
                                <Timeline key={index}
                                    company_name={data.company_name}
                                    jobTitle={data.jobTitle}
                                    summary={data.summary}
                                    startDate={data.startDate}
                                    endDate={data.endDate}
                                    bulletPoints={data.bulletPoints}
                                />
                            </>
                        )
                    })}
                </div>
            </div>


        </>
    )
}

export default Eduction