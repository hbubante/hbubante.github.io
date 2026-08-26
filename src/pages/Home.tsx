import { useEffect, useState } from "react";
import Button from "@mui/material/Button"
import { TextField, Alert, Fade } from "@mui/material";
import '@fontsource-variable/inter';
import { motion } from "motion/react";
import { useNavigate, useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

// Icon imports
import { SiJavascript, SiTypescript, SiPython, SiDotnet, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJava, FaReact, FaArrowRight } from "react-icons/fa";
import Csharp from "../assets/csharp.png";
import Cplusplus from "../assets/cplusplus.png";
import C from "../assets/c.png";

// Image imports
import previewBTrNPMS from "../assets/projects_preview/btrnpms1.png";
import previewCadence from "../assets/projects_preview/cadence1.png";
import previewSteamStats from "../assets/projects_preview/steamstats1.png";
import previewAppointMed from "../assets/projects_preview/appointmed1.png";
import previewAdKnow from "../assets/projects_preview/adknow1.png";
import previewProjectPASIL from "../assets/projects_preview/projectpasil1.png";

// For Motion Variants
const imageVariants = {
        rest: {
            scale: 1,
            filter: "brightness(1)",
        },
        hover: {
            scale: 1.05,
            filter: "brightness(0.9)",
        },
    };

const contentVariants = {
    rest: {
        y: 0,
    },
    hover: {
        y: -3,
    },
};

// For scrolling functionality
const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section)
        return;

    // Editable top margin when scrolling section into view; Adjust as needed when editing probably
    const scrollMargin = 250;

    const y = section.getBoundingClientRect().top + window.scrollY - scrollMargin;

    window.scrollTo({
        top: y,
        behavior: "smooth",
    });
};

// For redirecting functionality
const GITHUB_URL = "https://github.com/hbubante";
const LINKEDIN_URL = "https://www.linkedin.com/in/hbubante/";
const RESUME_URL = `${import.meta.env.BASE_URL}Ubante_Resume.pdf`;

const openExternal = (platform: string) => {
    window.open(platform, "_blank", "noopener,noreferrer");
};

// For EmailJS IDS/KEYS and other things
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const currentTime = new Date().toLocaleString("en-PH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZoneName: "short",
});

function Home() {
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

    // For navigation; useEffect for navigating to specific section from other pages
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) return;

        scrollToSection(location.hash.substring(1));
    }, [location]);

    // For EmailJS and Contact Form functionalities
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [snackbar, setSnackbar] = useState({
        open: false,
        severity: "success" as "success" | "error",
        message: "",
    });

    // States for Send Message button; Don't allow spamming of button
    const [sending, setSending] = useState(false);

    // For handling closing of snackbar
    const handleSnackbarClose = () => {
        setSnackbar((prev) => ({
            ...prev,
            open: false,
        }));
    };

    // For automatically closing snackbar
    useEffect(() => {
        if (!snackbar.open) return;

        const timer = setTimeout(() => {
            setSnackbar((prev) => ({
                ...prev,
                open: false,
            }));
        }, 5000); // I.e. 5 seconds

        return () => clearTimeout(timer);
    }, [snackbar.open]);

    // For handling sending of message from Contact Form
    const sendMessage = async () => {
        // Check first if all fields are filled in; All are required
        if (!name || !email || !subject || !message)
        {
            setSnackbar({
                open: true,
                severity: "error",
                message: "Please fill out all fields.",
            });

            return;
        }

        // Change state of the Send Message button
        setSending(true);

        // Do the stuff man
        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: name,
                    reply_to: email,
                    title: subject,
                    time: currentTime,
                    message: message,
                },
                {
                    publicKey: PUBLIC_KEY,
                }
            );

            setSnackbar({
                open: true,
                severity: "success",
                message: "Message sent successfully.",
            });

            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }
        catch (error) {
            console.error(error);

            setSnackbar({
                open: true,
                severity: "error",
                message: "Failed to send, please try again.",
            });
        }

        // Revert back the state of the Send Message button
        finally {
            setSending(false);
        }
    };

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
                    onClick={() => scrollToSection("about")}
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
                    onClick={() => scrollToSection("projects")}
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
                    onClick={() => scrollToSection("contact")}
                >
                    Contact
                </p>
            </nav>

            {/* Landing Content */}
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
                    items-left
                    gap-[50px]
                    mt-[225px]
                    w-full
                    max-w-[1280px]
            ">
                <h1 className="
                    accent-accent
                ">
                    hey there<span className="surface-surface">;</span>
                </h1>

                <p className="
                    max-w-[750px]
                    text-[24px]
                    font-[400]
                    text-text
                ">
                    I'm Hans, and i like turning ideas into software. I build web systems, explore new technologies, and enjoy the process of crafting solutions from conceptual ideas.
                </p>

                <Button
                    sx={{
                        width: 175,
                        height: 50,
                        border: 2,
                        borderColor: "#DCBAB5",
                        borderRadius: 3,
                        color: "#DCBAB5",
                        fontFamily: "'Inter Variable', sans-serif",
                        fontSize: 16,
                        fontWeight: 600,
                        textTransform: 'none',

                        "&:hover": {
                            backgroundColor: "#DCBAB50D",
                        },
                    }}
                    onClick={() => scrollToSection("contact")}
                >
                    Contact Me
                </Button>
            </motion.div>

            {/* About Section */}
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
                    lg:flex-row
                    justify-between
                    items-stretch
                    gap-[50px]
                    w-full
                    max-w-[1280px]
                "
                id="about"
            >
                <div className="
                    flex
                    flex-col
                    gap-[50px]
                ">
                    <h2 className="
                        accent-accent
                    ">
                        about me<span className="surface-surface">;</span>
                    </h2>

                    <p className="
                        max-w-[638px]
                        text-[20px]
                        font-[400]
                        text-text
                    ">
                        I am a Computer Science graduate focusing on full-stack development and currently specializing in React and .NET, among other technologies. I have hands-on experience with systems development through internship, academic, and technical projects.
                    </p>

                    <div className="
                        flex
                        flex-row
                        gap-[50px]
                    ">
                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none',

                                "&:hover": {
                                    backgroundColor: "#DCBAB50D",
                                },
                            }}
                            onClick={() => openExternal(RESUME_URL)}
                        >
                            View Resume
                        </Button>

                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none',

                                "&:hover": {
                                    backgroundColor: "#DCBAB50D",
                                },
                            }}
                            onClick={() => openExternal(GITHUB_URL)}
                        >
                            View GitHub
                        </Button>
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    justify-center
                    items-center
                    gap-[50px]
                ">
                    <div className="
                        flex
                        flex-row
                        items-center
                        gap-[25px]
                        lg:gap-[50px]
                    ">
                        <FaReact
                        size={50}
                        className="surface-surface"
                        />

                        <SiTailwindcss
                        size={50}
                        className="surface-surface"
                        />

                        <SiTypescript
                        size={50}
                        className="surface-surface"
                        />

                        <FaHtml5
                        size={60}
                        className="surface-surface"
                        />

                        <FaCss3Alt
                        size={60}
                        className="surface-surface"
                        />

                        <SiJavascript
                        size={50}
                        className="surface-surface"
                        />
                    </div>

                    <div className="
                        flex
                        flex-row
                        gap-[25px]
                        lg:gap-[50px]
                    ">
                        <img 
                            src={Csharp}
                            style={{ width: "50px", height: "50px" }} 
                        />
                        
                        <SiPython
                        size={50}
                        className="surface-surface"
                        />

                        <FaJava
                        size={50}
                        className="surface-surface"
                        />

                        <img 
                            src={Cplusplus}
                            style={{ width: "50px", height: "50px" }} 
                        />

                        <img 
                            src={C}
                            style={{ width: "50px", height: "50px" }} 
                        />
                    </div>

                    <div className="
                        flex
                        flex-row
                        gap-[25px]
                        lg:gap-[50px]
                    ">
                        <SiDotnet
                        size={50}
                        className="surface-surface"
                        />

                        <SiPostgresql
                        size={50}
                        className="surface-surface"
                        />
                    </div>
                </div>
            </motion.div>

            {/* Projects Section */}
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
                    gap-[50px]
                    w-full
                    max-w-[1280px]
                "
                id="projects"
            >
                <h2 className="
                    accent-accent
                ">
                    projects i've worked on<span className="surface-surface">;</span>
                </h2>

                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-[50px]
                ">
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                        "
                        onClick={() => navigate("/projects/cadence")}
                    >
                        <motion.img 
                            src={previewCadence}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                Cadence
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                        "
                        onClick={() => navigate("/projects/btrnpms")}
                    >
                        <motion.img 
                            src={previewBTrNPMS}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                BTr NPMS
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                        "
                        onClick={() => navigate("/projects/steamstats")}
                    >
                        <motion.img 
                            src={previewSteamStats}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                SteamStats
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                        "
                        onClick={() => navigate("/projects/appointmed")}
                    >
                        <motion.img 
                            src={previewAppointMed}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                AppointMed
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                        "
                        onClick={() => navigate("/projects/adknow")}
                    >
                        <motion.img 
                            src={previewAdKnow}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                AdKnow
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="
                            relative
                            overflow-hidden
                            w-[375px]
                            sm:w-[425px]
                            md:w-[475px]
                            xl:w-[550px]
                            h-[300px]
                            rounded-[15px]
                            cursor-pointer
                        "
                        onClick={() => navigate("/projects/projectpasil")}
                    >
                        <motion.img 
                            src={previewProjectPASIL}
                            variants={imageVariants}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                object-cover
                        "/>

                        <div className="
                            absolute
                            -inset-1
                            rounded-xl
                            bg-gradient-to-b
                            from-transparent
                            to-black
                            opacity-75
                        ">
                        </div>

                        <motion.div 
                            variants={contentVariants}
                            className="
                                flex
                                flex-row
                                justify-between
                                items-center
                                absolute
                                bottom-[50px]
                                left-[50px]
                                right-[50px]
                                z-10
                        ">
                            <p className="
                                text-[20px]
                                font-[600]
                                text-text
                            ">
                                Project PASIL
                            </p>
                            
                            <FaArrowRight
                                size={25}
                                className="surface-surface"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Contact Section */}
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
                    xl:flex-row
                    justify-between
                    items-stretch
                    gap-[50px]
                    w-full
                    max-w-[1280px]
                "
                id="contact"
            >
                <div className="
                    flex
                    flex-col
                    gap-[50px]
                    w-full
                ">
                    <h2 className="
                        accent-accent
                    ">
                        contact me<span className="surface-surface">;</span>
                    </h2>

                    <p className="
                        max-w-[638px]
                        text-[20px]
                        font-[400]
                        text-text
                    ">
                        If you wish to reach out, you may fill out the form to send a message. Alternatively, you can also find me on the following platforms:
                    </p>

                    <div className="
                        flex
                        flex-row
                        gap-[50px]
                    ">
                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none',

                                "&:hover": {
                                    backgroundColor: "#DCBAB50D",
                                },
                            }}
                            onClick={() => openExternal(LINKEDIN_URL)}
                        >
                            LinkedIn
                        </Button>

                        <Button
                            sx={{
                                width: 175,
                                height: 50,
                                border: 2,
                                borderColor: "#DCBAB5",
                                borderRadius: 3,
                                color: "#DCBAB5",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                                textTransform: 'none',

                                "&:hover": {
                                    backgroundColor: "#DCBAB50D",
                                },
                            }}
                            onClick={() => openExternal(GITHUB_URL)}
                        >
                            GitHub
                        </Button>
                    </div>
                </div>

                <div className="
                    flex
                    flex-col
                    justify-start
                    items-center
                    gap-[20px]
                    w-full
                ">
                    <p className="
                        max-w-[638px]
                        text-[24px]
                        font-[600]
                        accent-accent
                    ">
                        Send a Message
                    </p>

                    <TextField
                        label="Name"
                        variant="outlined"
                        sx={{
                            width: "400px",

                            "& .MuiInputLabel-root": {
                                color: "#DCBAB5",
                                position: "relative",
                                transform: "none",
                                marginBottom: "10px",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#DCBAB5",
                            },

                            "& .MuiOutlinedInput-root": {
                                height: "50px",
                                borderRadius: "12px",

                                "& fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#DCBAB5",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#DCBAB5",
                                },
                            },

                            "& input": {
                                color: "#FFFFFF",
                                padding: "0 16px",
                            },

                            "& legend": {
                                display: 'none',
                            },

                            "& fieldset": {
                                top: 0,
                            },
                        }}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <TextField
                        label="Email"
                        variant="outlined"
                        sx={{
                            width: "400px",

                            "& .MuiInputLabel-root": {
                                color: "#DCBAB5",
                                position: "relative",
                                transform: "none",
                                marginBottom: "10px",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#DCBAB5",
                            },

                            "& .MuiOutlinedInput-root": {
                                height: "50px",
                                borderRadius: "12px",

                                "& fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#DCBAB5",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#DCBAB5",
                                },
                            },

                            "& input": {
                                color: "#FFFFFF",
                                padding: "0 16px",
                            },

                            "& legend": {
                                display: 'none',
                            },

                            "& fieldset": {
                                top: 0,
                            },
                        }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <TextField
                        label="Subject"
                        variant="outlined"
                        sx={{
                            width: "400px",

                            "& .MuiInputLabel-root": {
                                color: "#DCBAB5",
                                position: "relative",
                                transform: "none",
                                marginBottom: "10px",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#DCBAB5",
                            },

                            "& .MuiOutlinedInput-root": {
                                height: "50px",
                                borderRadius: "12px",

                                "& fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#DCBAB5",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#DCBAB5",
                                },
                            },

                            "& input": {
                                color: "#FFFFFF",
                                padding: "0 16px",
                            },

                            "& legend": {
                                display: 'none',
                            },

                            "& fieldset": {
                                top: 0,
                            },
                        }}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <TextField
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        sx={{
                            width: "400px",

                            "& .MuiInputLabel-root": {
                                color: "#DCBAB5",
                                position: "relative",
                                transform: "none",
                                marginBottom: "10px",
                                fontFamily: "'Inter Variable', sans-serif",
                                fontSize: 16,
                                fontWeight: 600,
                            },

                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "#DCBAB5",
                            },

                            "& .MuiOutlinedInput-root": {
                                borderRadius: "12px",

                                "& fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },

                                "&:hover fieldset": {
                                    borderColor: "#DCBAB5",
                                },

                                "&.Mui-focused fieldset": {
                                    borderColor: "#DCBAB5",
                                    borderWidth: "2px",
                                },
                            },

                            "& textarea": {
                                color: "#FFFFFF",
                            },

                            "& legend": {
                                display: 'none',
                            },

                            "& fieldset": {
                                top: 0,
                            },

                            "& textarea::-webkit-scrollbar": {
                                width: "6px",
                            },

                            "& textarea::-webkit-scrollbar-thumb": {
                                backgroundColor: "#DCBAB5",
                                borderRadius: "999px",
                            },
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <Button 
                        sx={{
                            width: 175,
                            height: 50,
                            border: 2,
                            borderColor: "#DCBAB5",
                            borderRadius: 3,
                            color: "#DCBAB5",
                            fontFamily: "'Inter Variable', sans-serif",
                            fontSize: 16,
                            fontWeight: 600,
                            textTransform: 'none',

                            "&:hover": {
                                backgroundColor: "#DCBAB50D",
                            },

                            "&.Mui-disabled": {
                                backgroundColor: "#DCBAB5",
                                color: "#FFFFFF",
                                fontFamily: "'Inter Variable', sans-serif",
                            },
                        }}
                        disabled={sending}
                        onClick={sendMessage}
                    >
                        {sending? "Sending..." : "Send Message"}
                    </Button>

                    <Fade in={snackbar.open}>
                        <Alert
                            onClose={handleSnackbarClose}
                            severity={snackbar.severity}
                            variant="filled"
                            sx={{
                                borderRadius: "10px",
                                color: "FFFFFF",
                                backgroundColor: "#DCBAB5",
                            }}
                        >
                            {snackbar.message}
                        </Alert>
                    </Fade>
                </div>
            </motion.div>
        </main>
    );
}

export default Home