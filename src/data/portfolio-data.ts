import { Github, Linkedin, Mail, Twitter, Code, Database, Rocket, Users, Briefcase, GraduationCap, MapPin, Phone, Instagram, Tags } from "lucide-react";

export const portfolioData = {
  // Personal Info
  personal: {
    name: "Nikhil Daksh",
    title: "Full Stack Developer | Next.js Expert | MERN Stack",
    tagline: "Welcome to my portfolio",
    description: "Building modern web applications with cutting-edge technologies. Specialized in creating scalable e-learning platforms, ERP systems, and production-ready applications.",
    location: "India",
    email: "nikhildaksh24@gmail.com",
    phone: "+91 75051 12399",
    availability: "I'm currently available for freelance projects and full-time opportunities. Feel free to reach out!",
    resumeUrl: "https://drive.google.com/file/d/1QvFGa60ryL2erMdwFmowD5z2uQ-vzQ-M/view",
  },

  // Social Links
  social: [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/nikhildaksh",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/nikhil-daksh-9b6b371b2",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/nikhildaksh",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/nikhildakshg"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:nikhildaksh24@gmail.com",
    },
  ],

  // About Section
  about: {
    title: "About Me",
    subtitle: "Full Stack Developer based in India with extensive experience in building modern web applications",
    paragraphs: [
      "I'm a passionate full-stack developer specializing in Next.js, React, and Node.js. Currently building production-ready applications including DreamTopper LMS platform, comprehensive ERP systems, and e-commerce solutions.",
      "With expertise in modern web technologies, I focus on creating scalable solutions with clean architecture, efficient database design, and seamless user experiences. I actively teach MERN stack to others and love solving complex technical challenges.",
    ],
    badges: [
      "BCA - Bachelor of Computer Applications",
      "MERN Stack Instructor",
      "Next.js Developer",
    ],
    highlights: [
      {
        icon: Code,
        title: "Clean Code",
        description: "Writing maintainable and scalable code",
      },
      {
        icon: Database,
        title: "Database Design",
        description: "Expert in MongoDB and complex schemas",
      },
      {
        icon: Rocket,
        title: "Fast Delivery",
        description: "Rapid prototyping and deployment",
      },
      {
        icon: Users,
        title: "Team Player",
        description: "Teaching MERN and collaborating",
      },
    ],
  },

  // Skills Section
  skills: {
    title: "Skills & Technologies",
    subtitle: "Proficient in modern web development technologies and tools",
    categories: [
      {
        category: "Frontend",
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "shadcn/ui",
          "Redux Toolkit",
          "HTML5",
          "CSS3",
          "Responsive Design",
        ],
      },
      {
        category: "Backend",
        skills: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "MongoDB",
          "Mongoose",
          "PHP",
          "MySQL",
          "Authentication",
          "JWT",
        ],
      },
      {
        category: "DevOps & Tools",
        skills: [
          "Docker",
          "PM2",
          "Ubuntu VPS",
          "Git",
          "GitHub",
          "Hostinger",
          "AWS S3",
          "CloudFront",
          "FFMPEG",
        ],
      },
      {
        category: "Integrations",
        skills: [
          "Razorpay",
          "PayU",
          "Shiprocket",
          "BunnyCDN",
          "Bunny Stream",
          "Video Streaming",
          "File Upload",
          "Payment Gateways",
        ],
      },
    ],
  },

  // Projects Section
  projects: {
    title: "Featured Projects",
    subtitle: "Production-ready applications showcasing my full-stack expertise",
    list: [
      {
        title: "Grafiq India",
        description:
          "A full-stack custom printing e-commerce platform for business cards, stamps, ID cards, flyers, banners, and other personalized print products. Built with secure AWS S3 file uploads, dynamic product customization, online payments, and an intuitive admin dashboard for managing orders, products, and customers.",
        tags: [
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "AWS S3",
          "Tailwind CSS",
          "shadcn/ui",
          "Framer Motion",
          "Razorpay"
        ],
        liveLink: "https://grafiq.in",
        githubLink: "#",
        isPrivate: true,
      },
      {
        title: "Heega Sports E-Commerce",
        description: "Full-stack e-commerce platform with product catalog, shopping cart, order management, and payment integration. Built with Redux Toolkit for state management and deployed on Ubuntu VPS for optimal performance.",
        tags: ["Next.js", "TypeScript", "Mongoose", "shadcn/ui", "Redux Toolkit"],
        liveLink: "https://heegasports.com",
        githubLink: "#",
        isPrivate: true,
      },
      {
        title: "DreamTopper ERP System",
        description: "Comprehensive institute ERP for fee tracking, receipt generation, and certificate automation. Features PayU payment gateway integration and deployed on Hostinger VPS with MongoDB for data management.",
        tags: ["Next.js", "TypeScript", "Mongoose", "AWS S3", "PayU"],
        liveLink: "https://erp.dreamtopper.in",
        githubLink: "#",
        isPrivate: true,
      },
      {
        title: "DreamTopper LMS Platform",
        description: "Learning Management System for online courses with custom video processing using FFMPEG. Optimized bandwidth costs with VPS caching and CloudFront fallback. Features course management and student progress tracking.",
        tags: ["Next.js", "TypeScript", "FFMPEG", "AWS S3", "CloudFront"],
        liveLink: "https://learn.dreamtopper.in",
        githubLink: "#",
        isPrivate: true,
      },
      {
        title: "Calligraphy Foundation LMS",
        description: "Production-ready Learning Management System built with Next.js and TypeScript. Integrated Bunny Stream for secure, high-quality video-based learning with adaptive bitrate streaming.",
        tags: ["Next.js", "TypeScript", "Bunny Stream", "MongoDB", "shadcn/ui"],
        liveLink: "https://learn.thecalligraphyfoundation.com",
        githubLink: "#",
        isPrivate: true,
      },
      {
        title: "Landing Pages & Forms",
        description: "Custom landing and registration pages for DreamTopper and AkSharmaHotsav websites. Built with PHP and MySQL, featuring payment gateway integration and form validation.",
        tags: ["PHP", "MySQL", "Payment Integration", "Responsive Design"],
        liveLink: "#",
        githubLink: "#",
        isPrivate: true,
      },
    ],
  },

  // Experience Section
  experience: {
    title: "Experience & Education",
    subtitle: "My professional journey and educational background",
    work: [
      {
        title: "Full Stack Developer",
        company: "Freelance / Self-Employed",
        period: "2022 - Present",
        description: "Building production-ready web applications including LMS platforms, ERP systems, and e-commerce solutions. Successfully deployed multiple projects on Ubuntu VPS and Hostinger with optimized performance and cost efficiency.",
        skills: ["Next.js", "React", "Node.js", "MongoDB", "Docker", "AWS"],
      },
      {
        title: "MERN Stack Instructor",
        company: "Private Coaching",
        period: "2022 - Present",
        description: "Teaching full-stack web development to students, covering React, Node.js, Express, MongoDB, and modern deployment practices. Mentoring students in building real-world projects.",
        skills: ["Teaching", "MERN Stack", "Web Development", "Mentoring"],
      },
    ],
    education: [
      {
        title: "BCA - Bachelor of Computer Applications",
        company: "CCSU University",
        period: "2021 - 2024",
        description: "Specialized in software engineering, database management, and web technologies. Built multiple full-stack projects during coursework including e-commerce platforms and learning management systems.",
        skills: ["DSA", "DBMS", "Web Development", "Software Engineering"],
      },
    ],
  },

  // Contact Section
  contact: {
    title: "Get In Touch",
    subtitle: "Let's discuss your next project or collaboration opportunity",
    info: [
      {
        icon: Mail,
        label: "Email",
        value: "nikhildaksh24@gmail.com",
        href: "mailto:nikhildaksh24@gmail.com",
      },
      {
        icon: Phone,
        label: "Phone",
        value: "+91 75051 12399",
        href: "tel:+917505112399",
      },
      {
        icon: MapPin,
        label: "Location",
        value: "India",
        href: "#",
      },
    ],
  },

  // Navigation
  navigation: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],

  // Contact with Message
  // Quick Contact with Messages ✅ NEW
  quickContact: {
    whatsApp: {
      number: "917505112399", // Without + and spaces
      messages: {
        default: "Hi Nikhil,\n\nI came across your portfolio and I'm impressed with your work! I would like to discuss a potential project/collaboration with you.\n\nLooking forward to connecting!",
        hero: "Hi Nikhil,\n\nI just visited your portfolio and would love to discuss a project opportunity with you!",
        project: "Hi Nikhil,\n\nI'm interested in your work and would like to discuss a similar project for my business.",
        contact: "Hi Nikhil,\n\nLet's connect! I have a project requirement that matches your expertise.",
      },
      getURL: function (messageType: 'default' | 'hero' | 'project' | 'contact' = 'default') {
        return `https://wa.me/${this.number}?text=${encodeURIComponent(this.messages[messageType])}`;
      }
    },
    email: {
      address: "nikhildaksh24@gmail.com",
      subjects: {
        default: "Project Inquiry",
        collaboration: "Collaboration Opportunity",
        freelance: "Freelance Project Discussion",
      },
      getURL: function (subject: 'default' | 'collaboration' | 'freelance' = 'default') {
        return `mailto:${this.address}?subject=${encodeURIComponent(this.subjects[subject])}`;
      }
    },
    phone: {
      number: "+917505112399",
      getURL: function () {
        return `tel:${this.number}`;
      }
    }
  },

};

// Type exports for TypeScript
export type PortfolioData = typeof portfolioData;
