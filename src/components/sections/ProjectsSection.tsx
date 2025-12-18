"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1 // Lower threshold for early trigger
  });

  return (
    <section id="projects" className="py-20 bg-muted/30" ref={ref}>
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
            {portfolioData.projects.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {portfolioData.projects.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.list.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              whileHover={{
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
            >
              <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full group overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"
                />
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.div
                        key={tagIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.5 + index * 0.2 + tagIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        <Badge variant="secondary">{tag}</Badge>
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <motion.div
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button size="sm" variant="default" asChild>
                        <Link href={project.liveLink} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.08, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubLink} target="_blank">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Link>
                      </Button>
                    </motion.div>
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

export default ProjectsSection;

// "use client";

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ExternalLink, Github } from "lucide-react";
// import Link from "next/link";
// import { motion } from "motion/react";
// import { useInView } from "motion/react";
// import { useRef } from "react";
// import { portfolioData } from "@/data/portfolio-data";

// const ProjectsSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     once: false,
//     amount: 0.2
//   });

//   return (
//     <section id="projects" className="py-20 bg-muted/30" ref={ref}>
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
//             {portfolioData.projects.title}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-muted-foreground max-w-2xl mx-auto"
//           >
//             {portfolioData.projects.subtitle}
//           </motion.p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {portfolioData.projects.list.map((project, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 60, scale: 0.95 }}
//               animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.2,
//                 ease: "easeOut",
//               }}
//               whileHover={{
//                 y: -15,
//                 scale: 1.02,
//                 transition: { duration: 0.4, ease: "easeOut" },
//               }}
//             >
//               <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full group overflow-hidden">
//                 <motion.div
//                   initial={{ opacity: 0 }}
//                   whileHover={{ opacity: 1 }}
//                   className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 -z-10"
//                 />
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
//                     {project.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <motion.p
//                     initial={{ opacity: 0 }}
//                     animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                     transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
//                     className="text-muted-foreground leading-relaxed"
//                   >
//                     {project.description}
//                   </motion.p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, tagIndex) => (
//                       <motion.div
//                         key={tagIndex}
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                         transition={{
//                           duration: 0.4,
//                           delay: 0.5 + index * 0.2 + tagIndex * 0.05,
//                         }}
//                         whileHover={{ scale: 1.1, y: -2 }}
//                       >
//                         <Badge variant="secondary">{tag}</Badge>
//                       </motion.div>
//                     ))}
//                   </div>
//                   <div className="flex gap-3 pt-2">
//                     <motion.div
//                       whileHover={{ scale: 1.08, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                     >
//                       <Button size="sm" variant="default" asChild>
//                         <Link href={project.liveLink} target="_blank">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           Live Demo
//                         </Link>
//                       </Button>
//                     </motion.div>
//                     <motion.div
//                       whileHover={{ scale: 1.08, y: -2 }}
//                       whileTap={{ scale: 0.95 }}
//                       transition={{ type: "spring", stiffness: 400, damping: 17 }}
//                     >
//                       <Button size="sm" variant="outline" asChild>
//                         <Link href={project.githubLink} target="_blank">
//                           <Github className="w-4 h-4 mr-2" />
//                           Code
//                         </Link>
//                       </Button>
//                     </motion.div>
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

// export default ProjectsSection;
