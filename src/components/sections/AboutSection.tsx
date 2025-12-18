"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,  // ✅ Sirf ek baar animation
    amount: 0.15 // ✅ 15% visible = trigger (better for mobile)
  });

  return (
    <section id="about" className="py-20 bg-muted/30" ref={ref}>
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
            {portfolioData.about.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {portfolioData.about.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y:30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="space-y-6"
          >
            {portfolioData.about.paragraphs.map((para, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {para}
              </motion.p>
            ))}
            <div className="flex flex-wrap gap-3">
              {portfolioData.about.badges.map((badge, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.9 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default"
                >
                  {badge}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioData.about.highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <CardContent className="p-6 space-y-3">
                    <motion.div
                      whileHover={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.1,
                      }}
                      transition={{ duration: 0.6 }}
                      className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary"
                    >
                      <item.icon className="w-6 h-6" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
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

export default AboutSection;


// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "motion/react";
// import { useInView } from "motion/react";
// import { useRef } from "react";
// import { portfolioData } from "@/data/portfolio-data";

// const AboutSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     once: false,  // ✅ Changed: Animation har baar chalegi
//     amount: 0.3   // ✅ Changed: 30% visible hone par trigger
//   });

//   return (
//     <section id="about" className="py-20 bg-muted/30" ref={ref}>
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} // ✅ Added: Reset when out of view
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           className="text-center mb-16"
//         >
//           <motion.h2
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
//             transition={{ duration: 0.6, ease: "easeOut" }}
//             className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
//           >
//             {portfolioData.about.title}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-muted-foreground max-w-2xl mx-auto"
//           >
//             {portfolioData.about.subtitle}
//           </motion.p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -60 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
//             transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//             className="space-y-6"
//           >
//             {portfolioData.about.paragraphs.map((para, index) => (
//               <motion.p
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//                 transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
//                 className="text-lg text-muted-foreground leading-relaxed"
//               >
//                 {para}
//               </motion.p>
//             ))}
//             <div className="flex flex-wrap gap-3">
//               {portfolioData.about.badges.map((badge, index) => (
//                 <motion.span
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
//                   transition={{
//                     delay: 0.9 + index * 0.1,
//                     type: "spring",
//                     stiffness: 200,
//                     damping: 15,
//                   }}
//                   whileHover={{ scale: 1.08, y: -2 }}
//                   className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium cursor-default"
//                 >
//                   {badge}
//                 </motion.span>
//               ))}
//             </div>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {portfolioData.about.highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60, scale: 0.9 }}
//                 animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.5 + index * 0.15,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.03,
//                   transition: { duration: 0.3, ease: "easeOut" },
//                 }}
//               >
//                 <Card className="border-none shadow-lg hover:shadow-2xl transition-shadow duration-500">
//                   <CardContent className="p-6 space-y-3">
//                     <motion.div
//                       whileHover={{
//                         rotate: [0, -10, 10, -10, 0],
//                         scale: 1.1,
//                       }}
//                       transition={{ duration: 0.6 }}
//                       className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary"
//                     >
//                       <item.icon className="w-6 h-6" />
//                     </motion.div>
//                     <h3 className="font-semibold text-foreground">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">
//                       {item.description}
//                     </p>
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

// export default AboutSection;