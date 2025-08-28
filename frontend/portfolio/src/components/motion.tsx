"use client"
import {motion} from "framer-motion"

export default async function Transition(){
    return <div >
        <motion.div className="h-48 w-60 bg-blue-200 border-r"
        animate={{
            x:1000,
            y: 500,
            rotate : 360
        }}
        transition={{
            duration : 3,
            delay : 1
        }}
        >         
        </motion.div>
    </div>
}
