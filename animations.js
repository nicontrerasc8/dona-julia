export const DropInFromLeft = {
    hidden: {
        x: "-100vw",
    },
    visible: {
        x: 0,
        opacity: 1,
        transition:{
            duration:.2,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    }, 
    exit: {
        x: "100vw"
    }
}



export const DropInFromTop = {
   hidden: {
       y: "-100vh",
   },
   visible: {
       y: 0,
       opacity: 1,
       transition:{
           duration:.4,
           type: "spring",
           damping: 25,
           stiffness: 500,
       }
   }, 
   exit: {
       y: "100vh"
   }
}

export const DropInFromBottom = {
    hidden: {
        y: "100vh",
    },
    visible: {
        y: 0,
        opacity: 1,
        transition:{
            duration:.2,
            type: "spring",
            damping: 25,
            stiffness: 500,
        }
    }, 
    exit: {
        y: "-100vh"
    }
}