import { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiVisualstudiocode, SiFirebase, SiMongodb, SiRedux, SiNextdotjs, SiTypescript, SiPostman, SiFigma } from 'react-icons/si';

const Skills = () => {
    const skills = [
        { name: 'HTML & CSS', level: 90, icon: <div className="flex gap-1"><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6]" /></div> },
        { name: 'JavaScript', level: 85, icon: <FaJs className="text-[#F7DF1E]" /> },
        { name: 'React.js', level: 85, icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', level: 80, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Node.js', level: 75, icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Git & GitHub', level: 80, icon: <FaGitAlt className="text-[#F05032]" /> },
    ];

    const technologies = [
        { name: 'VS Code', icon: <SiVisualstudiocode className="text-[#007ACC] text-2xl mb-2" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28] text-2xl mb-2" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] text-2xl mb-2" /> },
        { name: 'Redux', icon: <SiRedux className="text-[#764ABC] text-2xl mb-2" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-2xl mb-2 dark:text-white" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] text-2xl mb-2" /> },
        { name: 'REST API', icon: <SiPostman className="text-[#FF6C37] text-2xl mb-2" /> },
        { name: 'Figma', icon: <SiFigma className="text-2xl mb-2 dark:text-white" /> },
    ];

    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressBars = entry.target.querySelectorAll('.progress-bar');
                        progressBars.forEach((bar) => {
                            bar.classList.add('animate');
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, []);

    return (
        <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Skills & Technologies
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Main Skills */}
                    <div className="space-y-6" ref={observerRef}>
                        <h3 className="text-xl font-semibold mb-6">Main Skills</h3>
                        {skills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl">{skill.icon}</span>
                                        <span className="font-medium">{skill.name}</span>
                                    </div>
                                    <span className="text-blue-600">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div
                                        className="h-full bg-blue-600 rounded-full progress-bar"
                                        style={{ '--progress-width': `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Technologies */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Technologies I Use</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {technologies.map((tech, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center justify-center"
                                >
                                    {tech.icon}
                                    {tech.name}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;