import astnout from '../assets/astronot.png';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
                    About Me
                </h2>
                {/* Mobile image - only shows on mobile */}
                <div className="md:hidden mb-8 relative max-w-md mx-auto">
                    <img
                        src={astnout}
                        alt="Floating Astronaut"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 space-y-4">
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                            Hello! I'm a passionate Frontend Developer with a keen eye for creating
                            beautiful and functional web experiences. I specialize in building
                            responsive websites and web applications using modern technologies.
                        </p>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                            With a strong foundation in React.js and modern web technologies,
                            I strive to write clean, efficient, and maintainable code while
                            delivering exceptional user experiences.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            {['Problem Solver', 'Team Player', 'Quick Learner'].map((skill) => (
                                <div key={skill} className="flex items-center space-x-2">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Desktop image - only shows on md screens and up */}
                    <div className="hidden md:block md:w-1/2 relative max-w-md mx-auto">
                        <img
                            src={astnout}
                            alt="Floating Astronaut"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;