import SkillItem from "./SkillItem";
const Skills = ({ skill }) => {
    return (
        <>
            <div className="pt-10 pb-20 flex justify-center">
                <div className="md:px-10">
                    <div>
                        <h1 className="text-2xl text-center font-bold text-red-600 my-5">MY SKILLS</h1>
                    </div>

                    {/* Skills */}
                    <div className="w-full">
                        <div className="flex flex-wrap justify-center">
                            {skill && skill.filter(item => item.enabled).map((item, index) => (
                                <SkillItem key={index} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Skills;