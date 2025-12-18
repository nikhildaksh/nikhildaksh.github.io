"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.15
  });

  return (
    <section id="experience" className="py-20" ref={ref}>
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
            {portfolioData.experience.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {portfolioData.experience.subtitle}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Work Experience */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-2xl font-bold text-foreground flex items-center gap-3"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={isInView ? { rotate: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <Briefcase className="text-primary" />
              </motion.div>
              Work Experience
            </motion.h3>
            {portfolioData.experience.work.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.2,
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <motion.h4
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                        className="text-xl font-bold text-foreground"
                      >
                        {exp.title}
                      </motion.h4>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                        className="text-sm text-muted-foreground font-medium"
                      >
                        {exp.period}
                      </motion.span>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
                      className="text-primary font-semibold"
                    >
                      {exp.company}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {exp.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0, rotate: -90 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1, rotate: 0 }
                              : {}
                          }
                          transition={{
                            duration: 0.4,
                            delay: 0.9 + index * 0.2 + skillIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          whileHover={{ scale: 1.15, y: -2 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-2xl font-bold text-foreground flex items-center gap-3"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={isInView ? { rotate: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5,
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <GraduationCap className="text-primary" />
              </motion.div>
              Education
            </motion.h3>
            {portfolioData.experience.education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.7,
                  ease: "easeOut",
                }}
                whileHover={{
                  x: 12,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <motion.h4
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.9, duration: 0.5 }}
                        className="text-xl font-bold text-foreground"
                      >
                        {edu.title}
                      </motion.h4>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 1, duration: 0.4 }}
                        className="text-sm text-muted-foreground font-medium"
                      >
                        {edu.period}
                      </motion.span>
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.1, duration: 0.5 }}
                      className="text-primary font-semibold"
                    >
                      {edu.company}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={{ delay: 1.2, duration: 0.5 }}
                      className="text-muted-foreground leading-relaxed"
                    >
                      {edu.description}
                    </motion.p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          initial={{ opacity: 0, scale: 0, rotate: -90 }}
                          animate={
                            isInView
                              ? { opacity: 1, scale: 1, rotate: 0 }
                              : {}
                          }
                          transition={{
                            duration: 0.4,
                            delay: 1.3 + skillIndex * 0.05,
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                          }}
                          whileHover={{ scale: 1.15, y: -2 }}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;


// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Briefcase, GraduationCap } from "lucide-react";
// import { motion } from "motion/react";
// import { useInView } from "motion/react";
// import { useRef } from "react";
// import { portfolioData } from "@/data/portfolio-data";

// const ExperienceSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     once: false,
//     amount: 0.3
//   });

//   return (
//     <section id="experience" className="py-20" ref={ref}>
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
//             {portfolioData.experience.title}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-muted-foreground max-w-2xl mx-auto"
//           >
//             {portfolioData.experience.subtitle}
//           </motion.p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto space-y-12">
//           {/* Work Experience */}
//           <div className="space-y-6">
//             <motion.h3
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="text-2xl font-bold text-foreground flex items-center gap-3"
//             >
//               <motion.div
//                 initial={{ rotate: -180, scale: 0 }}
//                 animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
//                 transition={{
//                   duration: 0.6,
//                   type: "spring",
//                   stiffness: 200,
//                   damping: 15,
//                 }}
//               >
//                 <Briefcase className="text-primary" />
//               </motion.div>
//               Work Experience
//             </motion.h3>
//             {portfolioData.experience.work.map((exp, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -60 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.3 + index * 0.2,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   x: 12,
//                   scale: 1.02,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-2xl transition-all duration-500">
//                   <CardContent className="p-6 space-y-3">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//                       <motion.h4
//                         initial={{ opacity: 0 }}
//                         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                         transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
//                         className="text-xl font-bold text-foreground"
//                       >
//                         {exp.title}
//                       </motion.h4>
//                       <motion.span
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                         transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
//                         className="text-sm text-muted-foreground font-medium"
//                       >
//                         {exp.period}
//                       </motion.span>
//                     </div>
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                       transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
//                       className="text-primary font-semibold"
//                     >
//                       {exp.company}
//                     </motion.p>
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                       transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
//                       className="text-muted-foreground leading-relaxed"
//                     >
//                       {exp.description}
//                     </motion.p>
//                     <div className="flex flex-wrap gap-2 pt-2">
//                       {exp.skills.map((skill, skillIndex) => (
//                         <motion.span
//                           key={skillIndex}
//                           initial={{ opacity: 0, scale: 0, rotate: -90 }}
//                           animate={
//                             isInView
//                               ? { opacity: 1, scale: 1, rotate: 0 }
//                               : { opacity: 0, scale: 0, rotate: -90 }
//                           }
//                           transition={{
//                             duration: 0.4,
//                             delay: 0.9 + index * 0.2 + skillIndex * 0.05,
//                             type: "spring",
//                             stiffness: 200,
//                             damping: 15,
//                           }}
//                           whileHover={{ scale: 1.15, y: -2 }}
//                           className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default"
//                         >
//                           {skill}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           {/* Education */}
//           <div className="space-y-6">
//             <motion.h3
//               initial={{ opacity: 0, x: -30 }}
//               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
//               transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
//               className="text-2xl font-bold text-foreground flex items-center gap-3"
//             >
//               <motion.div
//                 initial={{ rotate: -180, scale: 0 }}
//                 animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -180, scale: 0 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.5,
//                   type: "spring",
//                   stiffness: 200,
//                   damping: 15,
//                 }}
//               >
//                 <GraduationCap className="text-primary" />
//               </motion.div>
//               Education
//             </motion.h3>
//             {portfolioData.experience.education.map((edu, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: -60 }}
//                 animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.7,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   x: 12,
//                   scale: 1.02,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-2xl transition-all duration-500">
//                   <CardContent className="p-6 space-y-3">
//                     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
//                       <motion.h4
//                         initial={{ opacity: 0 }}
//                         animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                         transition={{ delay: 0.9, duration: 0.5 }}
//                         className="text-xl font-bold text-foreground"
//                       >
//                         {edu.title}
//                       </motion.h4>
//                       <motion.span
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                         transition={{ delay: 1, duration: 0.4 }}
//                         className="text-sm text-muted-foreground font-medium"
//                       >
//                         {edu.period}
//                       </motion.span>
//                     </div>
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                       transition={{ delay: 1.1, duration: 0.5 }}
//                       className="text-primary font-semibold"
//                     >
//                       {edu.company}
//                     </motion.p>
//                     <motion.p
//                       initial={{ opacity: 0 }}
//                       animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                       transition={{ delay: 1.2, duration: 0.5 }}
//                       className="text-muted-foreground leading-relaxed"
//                     >
//                       {edu.description}
//                     </motion.p>
//                     <div className="flex flex-wrap gap-2 pt-2">
//                       {edu.skills.map((skill, skillIndex) => (
//                         <motion.span
//                           key={skillIndex}
//                           initial={{ opacity: 0, scale: 0, rotate: -90 }}
//                           animate={
//                             isInView
//                               ? { opacity: 1, scale: 1, rotate: 0 }
//                               : { opacity: 0, scale: 0, rotate: -90 }
//                           }
//                           transition={{
//                             duration: 0.4,
//                             delay: 1.3 + skillIndex * 0.05,
//                             type: "spring",
//                             stiffness: 200,
//                             damping: 15,
//                           }}
//                           whileHover={{ scale: 1.15, y: -2 }}
//                           className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default"
//                         >
//                           {skill}
//                         </motion.span>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;