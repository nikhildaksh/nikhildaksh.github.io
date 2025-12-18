"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.15
  });

  return (
    <section id="skills" className="py-20" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
          >
            {portfolioData.skills.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {portfolioData.skills.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.skills.categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
                <CardHeader>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  >
                    <CardTitle className="text-xl font-bold text-primary">
                      {category.category}
                    </CardTitle>
                  </motion.div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0, rotate: -180 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1, rotate: 0 }
                            : {}
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.5 + index * 0.1 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200,
                          damping: 15,
                        }}
                        whileHover={{
                          scale: 1.15,
                          rotate: 5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


// "use client";

// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "motion/react";
// import { useInView } from "motion/react";
// import { useRef } from "react";
// import { portfolioData } from "@/data/portfolio-data";

// const SkillsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     once: false,
//     amount: 0.3
//   });

//   return (
//     <section id="skills" className="py-20" ref={ref}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
//           >
//             {portfolioData.skills.title}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-muted-foreground max-w-2xl mx-auto"
//           >
//             {portfolioData.skills.subtitle}
//           </motion.p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {portfolioData.skills.categories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50, scale: 0.9 }}
//               animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.15,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 scale: 1.05,
//                 y: -8,
//                 transition: { duration: 0.3, ease: "easeOut" },
//               }}
//             >
//               <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-500 h-full">
//                 <CardHeader>
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                     transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
//                   >
//                     <CardTitle className="text-xl font-bold text-primary">
//                       {category.category}
//                     </CardTitle>
//                   </motion.div>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {category.skills.map((skill, skillIndex) => (
//                       <motion.div
//                         key={skillIndex}
//                         initial={{ opacity: 0, scale: 0, rotate: -180 }}
//                         animate={
//                           isInView
//                             ? { opacity: 1, scale: 1, rotate: 0 }
//                             : { opacity: 0, scale: 0, rotate: -180 }
//                         }
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.5 + index * 0.1 + skillIndex * 0.05,
//                           type: "spring",
//                           stiffness: 200,
//                           damping: 15,
//                         }}
//                         whileHover={{
//                           scale: 1.15,
//                           rotate: 5,
//                           transition: { duration: 0.2 },
//                         }}
//                       >
//                         <Badge
//                           variant="secondary"
//                           className="text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
//                         >
//                           {skill}
//                         </Badge>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsSection;
