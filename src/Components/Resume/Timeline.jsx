import { FaHandPointRight } from "react-icons/fa";

const Timeline = ({ company_name, jobTitle, summary, startDate, endDate, bulletPoints, id }) => {
    const startYear = new Date(startDate).getFullYear();
    const endYear = new Date(endDate).getFullYear();

    return (

        <div key={id} className="relative pl-8 sm:pl-32 py-3 group before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3">
            <div className="font-caveat font-medium lg:text-xl text-lg text-indigo-500 mb-1 sm:mb-0">{company_name}</div>
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{startYear} - {endYear}</time>
                <div className="lg:text-lg text-base font-bold text-slate-500">{jobTitle}</div>
            </div>
            <div className="text-slate-500 text-sm lg:text-base">{summary}</div>
            <div className="lg:ml-8 mt-3">
                {bulletPoints.filter(item => item != "").map((point, index) => (
                    <div key={index} className="flex items-center text-gray-400 mt-2">
                        <FaHandPointRight className="mr-2 text-blue-400" />
                        <p className="text-xs">{point}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Timeline