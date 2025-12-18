"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { portfolioData } from "@/data/portfolio-data";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.2
  });

  return (
    <section id="contact" className="py-20 bg-muted/30" ref={ref}>
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
            {portfolioData.contact.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            {portfolioData.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {portfolioData.contact.info.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + index * 0.15,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
              >
                <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-6 text-center space-y-3">
                    <motion.div
                      whileHover={{
                        rotate: 360,
                        scale: 1.25,
                        transition: { duration: 0.6 },
                      }}
                      className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto"
                    >
                      <info.icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="font-semibold text-foreground">
                      {info.label}
                    </h3>
                    {info.href !== "#" ? (
                      <Link
                        href={info.href}
                        target="_blank"
                        className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        {info.value}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
          >
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 text-center space-y-6">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="text-lg text-muted-foreground"
                >
                  {portfolioData.personal.availability}
                </motion.p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1, duration: 0.5 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" asChild>
                      <Link href={portfolioData.quickContact.whatsApp.getURL('contact')} target="_blank">
                        <Send className="w-4 h-4 mr-2" />
                        WhatsApp Me
                      </Link>
                    </Button>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.1, duration: 0.5 }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" asChild>
                      <Link href={portfolioData.quickContact.email.getURL('default')} target="_blank">
                        Send Email
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// "use client";

// import { Card, CardContent } from "@/components/ui/card";
// import { Send } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { motion } from "motion/react";
// import { useInView } from "motion/react";
// import { useRef } from "react";
// import { portfolioData } from "@/data/portfolio-data";

// const ContactSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { 
//     once: false,
//     amount: 0.3
//   });

//   return (
//     <section id="contact" className="py-20 bg-muted/30" ref={ref}>
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
//             {portfolioData.contact.title}
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="text-muted-foreground max-w-2xl mx-auto"
//           >
//             {portfolioData.contact.subtitle}
//           </motion.p>
//         </motion.div>

//         <div className="max-w-4xl mx-auto">
//           <div className="grid md:grid-cols-3 gap-6 mb-12">
//             {portfolioData.contact.info.map((info, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 60, scale: 0.9 }}
//                 animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.9 }}
//                 transition={{
//                   duration: 0.6,
//                   delay: 0.3 + index * 0.15,
//                   ease: "easeOut",
//                 }}
//                 whileHover={{
//                   y: -12,
//                   scale: 1.03,
//                   transition: { duration: 0.3 },
//                 }}
//               >
//                 <Card className="border-none shadow-lg hover:shadow-2xl transition-all duration-500">
//                   <CardContent className="p-6 text-center space-y-3">
//                     <motion.div
//                       whileHover={{
//                         rotate: 360,
//                         scale: 1.25,
//                         transition: { duration: 0.6 },
//                       }}
//                       className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto"
//                     >
//                       <info.icon className="w-5 h-5" />
//                     </motion.div>
//                     <h3 className="font-semibold text-foreground">
//                       {info.label}
//                     </h3>
//                     {info.href !== "#" ? (
//                       <Link
//                         href={info.href}
//                         target="_blank"
//                         className="text-sm text-muted-foreground hover:text-primary transition-colors block"
//                       >
//                         {info.value}
//                       </Link>
//                     ) : (
//                       <p className="text-sm text-muted-foreground">
//                         {info.value}
//                       </p>
//                     )}
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>

//           <motion.div
//             initial={{ opacity: 0, y: 40, scale: 0.95 }}
//             animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
//             transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
//           >
//             <Card className="border-none shadow-lg">
//               <CardContent className="p-8 text-center space-y-6">
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ delay: 0.8, duration: 0.6 }}
//                   className="text-lg text-muted-foreground"
//                 >
//                   {portfolioData.personal.availability}
//                 </motion.p>
//                 <div className="flex flex-wrap items-center justify-center gap-4">
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                     transition={{ delay: 1, duration: 0.5 }}
//                     whileHover={{ scale: 1.08, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button size="lg" asChild>
//                       <Link href={portfolioData.quickContact.whatsApp.getURL('contact')} target="_blank">
//                         <Send className="w-4 h-4 mr-2" />
//                         WhatsApp Me
//                       </Link>
//                     </Button>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//                     transition={{ delay: 1.1, duration: 0.5 }}
//                     whileHover={{ scale: 1.08, y: -2 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <Button size="lg" variant="outline" asChild>
//                       <Link href={portfolioData.quickContact.email.getURL('default')} target="_blank">
//                         Send Email
//                       </Link>
//                     </Button>
//                   </motion.div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
