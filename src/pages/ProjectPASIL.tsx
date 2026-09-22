import { useEffect } from "react";
import '@fontsource-variable/inter';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import ProjectPreviewGallery from "../components/ProjectPreviewGallery";

// Icon imports
import { SiPython, SiPytorch, SiUnity } from "react-icons/si";
import { FaChevronLeft} from "react-icons/fa";
import Csharp from "../assets/csharp.png";

// Image imports
import previewProjectPASIL1 from "../assets/projects_preview/projectpasil1.png";
import previewProjectPASIL2 from "../assets/projects_preview/projectpasil2.png";
import previewProjectPASIL3 from "../assets/projects_preview/projectpasil3.png";

function ProjectPASIL() {
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
                        Project PASIL<span className="surface-surface">;</span>
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
                                previewProjectPASIL1,
                                previewProjectPASIL2,
                                previewProjectPASIL3,
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
                                Senior Thesis Project
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
                                AI/RL  Developer
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
                                <SiPython
                                size={50}
                                className="surface-surface"
                                />

                                <SiPytorch
                                size={50}
                                className="surface-surface"
                                />

                                <img 
                                    src={Csharp}
                                    style={{ width: "50px", height: "50px" }}
                                    // For preventing dragging/right-clicking of logo image
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
                                />

                                <SiUnity
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
                            Project PASIL is a game-based learning platform designed to help grade school students practice and improve on the Order of Operations in Mathematics by adapting to each learner's knowledge level, facilitated through the game design and implementation of artificial intelligence for the difficulty adjustment process.  
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
                            <li>Implemented the Reinforcement Learning Agents using the <span className="surface-surface">Proximal Policy Optimization</span> algorithm through <span className="surface-surface">Stable Baselines3 and PyTorch</span>.</li>
                            <li>Developed the training architecture, including the simulation environment, observation/action spaces for each agent, and reward designs, using <span className="surface-surface">Python</span>.</li>
                            <li>Developed the inference architecture, including the RL Agent-to-Unity integration and data flow management, using <span className="surface-surface">Python, C#, and Unity</span>.</li>
                            <li>Designed and implemented a grammar-based procedural math problem generator for both the training and inference processes.</li>
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
                            <li><span className="surface-surface">Performance-Based Personalization</span> through the Difficulty Adjustment Agent (DAA) and Material Retrieval Agent (MRA), both taking in performance metrics as inputs.</li>
                            <li><span className="surface-surface">Dynamic Difficulty Adjustment</span> through the DAA, deciding how to adjust the next problem.</li>
                            <li><span className="surface-surface">Procedural Problem Generator</span> for generating the next problem based on the DAA decisions.</li>
                            <li><span className="surface-surface">Adaptive Material Retrieval</span> through the MRA, deciding if supplementary materials should be given to the learner.</li>
                            <li><span className="surface-surface">Material Manager</span> for selecting learning materials based on the identified struggle points during gameplay and to be presented to the learner.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}

export default ProjectPASIL;