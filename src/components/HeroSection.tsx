import Link from "next/link"
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
    className="h-auto md:h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0"
    >
        <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
        />
        <div className="p-4 relative z-10 w-full text-center" >
            <h1
            className="mt-20 md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >The Complete MERN Stack Developer Course</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Learn everything you need to become a full-stack web developer with this comprehensive MERN stack bootcamp. You'll master MongoDB, Express.js, React.js, and Node.js, the essential technologies for building modern web applications.</p>
            <div className="mt-4">
                <a target="_blank" href={"https://www.udemy.com/course/fullstack-web-development-course-projects-base/?couponCode=24T6MT62024"}>
                    <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                    Buy course
                    </Button>
                </a>
            </div>
        </div>
        
        </div>
  )
}

export default HeroSection