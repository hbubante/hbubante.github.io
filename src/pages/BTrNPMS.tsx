import { useEffect } from "react";
import '@fontsource-variable/inter';
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import ProjectPreviewGallery from "../components/ProjectPreviewGallery";

// Icon imports
import { FaChevronLeft } from "react-icons/fa";
import PowerApps from "../assets/powerapps.png";
import Dataverse from "../assets/dataverse.png";
import SharePoint from "../assets/sharepoint.png";

// Image imports
import previewBTrNPMS1 from "../assets/projects_preview/btrnpms1.png";
import previewBTrNPMS2 from "../assets/projects_preview/btrnpms2.png";
import previewBTrNPMS3 from "../assets/projects_preview/btrnpms3.png";

function BTrNPMS() {
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
                        BTr NPMS<span className="surface-surface">;</span>
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
                                previewBTrNPMS1,
                                previewBTrNPMS2,
                                previewBTrNPMS3
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
                                Internship Project
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
                                Company
                            </p>

                            <p className="
                                text-[20px]
                                font-[400]
                                text-text
                            ">
                                Bureau of the Treasury Camarines Sur
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
                                Software Development Intern
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
                                <img 
                                    src={PowerApps}
                                    style={{ width: "50px", height: "50px" }}
                                    // For preventing dragging/right-clicking of logo image
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
                                />

                                <img 
                                    src={Dataverse}
                                    style={{ width: "50px", height: "50px" }}
                                    // For preventing dragging/right-clicking of logo image
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
                                />

                                <img 
                                    src={SharePoint}
                                    style={{ width: "50px", height: "50px" }}
                                    // For preventing dragging/right-clicking of logo image
                                    draggable="false"
                                    onContextMenu={(e) => e.preventDefault()}
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
                            The Non-Procurements Management System (NPMS) was designed to streamline the management of non-procurement transactions for the Bureau of the Treasury Camarines Sur, providing solutions to initiate, monitor, and progress transactions based on the client's established procedures.
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
                            <li>Developed the user interface and system logic using <span className="surface-surface">PowerApps</span>.</li>
                            <li>Developed the data management system through <span className="surface-surface">Dataverse</span>.</li>
                            <li>Integrated <span className="surface-surface">SharePoint</span> for routing file uploads and ensuring data management longevity.</li>
                            <li>Implemented handling of transaction types and requirements for different categories based on client's established procedures.</li>
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
                            <li><span className="surface-surface">Ongoing/Archived Transactions Interface</span> for monitoring ongoing or completed transactions.</li>
                            <li><span className="surface-surface">Transaction Creation Process</span> for intializing new transactions and allowing for the setting of specific categories.</li>
                            <li><span className="surface-surface">Transaction Step Management</span> for uploading, deleting, and replacing files within steps and including other necessary information based on the category.</li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}

export default BTrNPMS;