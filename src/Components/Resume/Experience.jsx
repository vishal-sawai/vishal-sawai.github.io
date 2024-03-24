import Timeline from "./Timeline";
import { motion } from "framer-motion";
export const Experience = ({ timeline }) => {

    const variants = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
    }

    return (
        <>
            {/* Timeline for education */}
            <motion.div
                initial="hidden"
                variants={variants}
                whileInView="show"
                viewport={{ once: true }}
                transition={{ duration: 0.50 }}
                className="w-auto xl:mx-5">
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
            </motion.div>


        </>
    )
}

export default Experience