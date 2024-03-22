import SkillItem from "./SkillItem";
import Heading from "../Heading";
const Skills = ({ skill }) => {
    return (
        <>
            <div className="pt-10 pb-20 flex justify-center">
                <div className="md:px-10">
                    {/* Heading */}
                    <Heading title="MY SKILLS" />

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