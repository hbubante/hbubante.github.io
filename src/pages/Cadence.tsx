import { useEffect } from "react";
import '@fontsource-variable/inter';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import ProjectPreviewGallery from "../components/ProjectPreviewGallery";

// Icon imports
import { SiTypescript, SiDotnet, SiPostgresql, SiSupabase, SiTailwindcss } from "react-icons/si";
import { FaChevronLeft, FaReact, FaFigma } from "react-icons/fa";
import Csharp from "../assets/csharp.png";

// Image imports
import previewCadence1 from "../assets/projects_preview/cadence1.png";
import previewCadence2 from "../assets/projects_preview/cadence2.png";
import previewCadence3 from "../assets/projects_preview/cadence3.png";

function Cadence() {
    // Fix for refresh 40px scrolling issue
    useEffect(() => {
        if (!("scrollRestoration" in history)) return;

        history.scrollRestoration = "manual";

        window.scrollTo({
            top: 0,
            behavior: "instant",
        });

        return () => {
            history.scrollRestoration = "auto";
        };
    }, []);

    const navigate = useNavigate();

    return (
        <main className="
            flex
            flex-col
            justify-start
            items-center
            gap-[400px]
            px-[50px]
            pb-[200px]
            min-h-screen
            bg-background
        ">
            {/* Navigation Bar */}
            <nav className="
                fixed
                top-0
                z-50
                flex
                flex-row
                justify-center
                sm:justify-end
                items-center
                gap-[50px]
                w-full
                px-[50px]
                py-[25px]
                bg-background
            ">
                <p
                    className="
                        text-[24px]
                        font-[600]
                        surface-surface
                        cursor-pointer
                        transition-opacity
                        duration-300
                        hover:opacity-75
                    "
                    onClick={() => navigate("/#about")}
                >
                    About
                </p>

                <p
                    className="
                        text-[24px]
                        font-[600]
                        surface-surface
                        cursor-pointer
                        transition-opacity
                        duration-300
                        hover:opacity-75
                    "
                    onClick={() => navigate("/#projects")}
                >
                    Projects
                </p>

                <p
                    className="
                        text-[24px]
                        font-[600]
                        surface-surface
                        cursor-pointer
                        transition-opacity
                        duration-300
                        hover:opacity-75
                    "
                    onClick={() => navigate("/#contact")}
                >
                    Contact
                </p>
            </nav>

            {/* Main Content */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                    duration: 0.75,
                    ease: "easeOut",
                }} 
                className="
                    flex
                    flex-col
                    items-center
                    gap-[50px]
                    mt-[225px]
                    w-full
                    max-w-[1280px]
            ">

                {/* Header */}
                <div className="
                    flex
                    flex-row
                    justify-start
                    items-center
                    gap-[20px]
                    w-full
                ">
                    <FaChevronLeft
                    size={30}
                    className="
                        surface-surface
                        cursor-pointer
                    "
                    onClick={() => navigate("/#projects")}
                    />

                    <h2 className="
                        accent-accent
                        self-start
                    ">
                        Cadence<span className="surface-surface">;</span>
                    </h2>
                </div>

                {/* Middle Section */}
                <div className="
                    flex
                    flex-col
                    xl:flex-row
                    justify-between
                    items-start
                    gap-[50px]
                    w-full
                ">
                    <div className="
                        w-full
                        min-w-[450]
                        max-h-[505.69px]
                        lg:min-w-[899.78px]
                        border-[2px]
                        border-solid
                        rounded-[15px]
                        overflow-hidden
                        surface-surface
                    ">
                        <ProjectPreviewGallery
                            images={[
                                previewCadence1,
                                previewCadence2,
                                previewCadence3,
                            ]}
                        />
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[50px]
                        xl:gap-[20px]
                        w-full
                    ">
                        <div className="
                            flex
                            flex-col
                            gap-[10px]
                            w-full
                        ">
                            <p className="
                                text-[24px]
                                font-[600]
                                accent-accent
                            ">
                                Project Classification
                            </p>

                            <p className="
                                text-[20px]
                                font-[400]
                                text-text
                            ">
                                Technical Project
                            </p>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[10px]
                            w-full
                        ">
                            <p className="
                                text-[24px]
                                font-[600]
                                accent-accent
                            ">
                                Role
                            </p>

                            <p className="
                                text-[20px]
                                font-[400]
                                text-text
                            ">
                                Full-Stack Developer
                            </p>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[10px]
                            w-full
                        ">
                            <p className="
                                text-[24px]
                                font-[600]
                                accent-accent
                            ">
                                Status
                            </p>

                            <p className="
                                text-[20px]
                                font-[400]
                                text-text
                            ">
                                Ongoing
                            </p>
                        </div>

                        <div className="
                            flex
                            flex-col
                            gap-[20px]
                            w-full
                        ">
                            <p className="
                                text-[24px]
                                font-[600]
                                accent-accent
                            ">
                                Tech Stack
                            </p>

                            <div className="
                                grid
                                grid-cols-3
                                gap-[50px]
                            ">
                                <FaReact
                                size={50}
                                className="surface-surface"
                                />

                                <SiTypescript
                                size={50}
                                className="surface-surface"
                                />

                                <SiTailwindcss
                                size={50}
                                className="surface-surface"
                                />

                                <img 
                                    src={Csharp}
                                    style={{ width: "50px", height: "50px" }} 
                                />

                                <SiDotnet
                                size={50}
                                className="surface-surface"
                                />

                                <SiPostgresql
                                size={50}
                                className="surface-surface"
                                />

                                <SiSupabase
                                size={50}
                                className="surface-surface"
                                />

                                <FaFigma
                                size={50}
                                className="surface-surface"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="
                    flex
                    flex-col
                    self-start
                    gap-[50px]
                    w-full
                    max-w-[899.78px]
                ">
                    <div className="
                        flex
                        flex-col
                        gap-[10px]
                        w-full
                    ">
                        <p className="
                            text-[24px]
                            font-[600]
                            accent-accent
                        ">
                            Overview
                        </p>

                        <p className="
                            text-[20px]
                            font-[400]
                            text-text
                        ">
                            Cadence is a songwriting workspace designed to have a centralized platform for organizing different forms of ideas, including notes, audio recording snippets, and material references, thereby streamlining the brainstorming processes with making music. 
                        </p>
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[10px]
                        w-full
                    ">
                        <p className="
                            text-[24px]
                            font-[600]
                            accent-accent
                        ">
                            Responsibilities
                        </p>

                        <ul className="
                            text-[20px]
                            font-[400]
                            text-text
                            list-disc
                            list-inside
                            pl-3
                        ">
                            <li>Design the user interface through <span className="surface-surface">Figma</span> and establish overall system data flow and features.</li>
                            <li>Design and implement the front-end interface using <span className="surface-surface">React</span>.</li>
                            <li>Develop the back-end using <span className="surface-surface">ASP.NET Core</span>.</li>
                            <li>Design and implement <span className="surface-surface">RESTful API Endpoints</span> for front-end/back-end communication.</li>
                            <li>Utilize <span className="surface-surface">PostgreSQL</span> through <span className="surface-surface">Supabase</span> for data management.</li>
                        </ul>
                    </div>

                    <div className="
                        flex
                        flex-col
                        gap-[10px]
                        w-full
                    ">
                        <p className="
                            text-[24px]
                            font-[600]
                            accent-accent
                        ">
                            Key Features
                        </p>

                        <ul className="
                            text-[20px]
                            font-[400]
                            text-text
                            list-disc
                            list-inside
                            pl-3
                        ">
                            <li><span className="surface-surface">Project and Entry Management</span> for navigating and organizing projects and entries.</li>
                            <li><span className="surface-surface">Idea Management</span> for navigating and organizing short drafts/ideas, allowing to be imported into projects or entries.</li>
                            <li><span className="surface-surface">Workspace Canvas</span> for organizing block contents within projects and entries.</li>
                            <li><span className="surface-surface">Workspace Canvas Blocks</span> for attaching different types of media and notes into a workspace canvas.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}

export default Cadence;