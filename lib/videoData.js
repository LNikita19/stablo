// Video data - you can replace this with your actual video data later
export const videos = [
  {
    slug: "getting-started-nextjs",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    title: "Getting Started with Next.js - Complete Tutorial",
    description:
      "Learn the fundamentals of Next.js and build modern web applications with React.",
    content: `
      <p>Reinvention often comes in spurts, after a long period of silence. Just as modern web development recently enjoyed a comeback, brand new frameworks, a field with well-established principles for decades, is back in the limelight.</p>

      <p>Simply understood, Next.js is the art and science of structuring the portfolio to meet your strategic goals, defining the brand number, scope, and relationships needed to compete. Just as Modern Web Development prioritized function, a Framework is only as good as it is well-suited for the purpose it strives to achieve.</p>

      <p>In this comprehensive tutorial, you'll learn everything you need to know to get started with Next.js. We'll cover the basics of routing, data fetching, server-side rendering, and much more.</p>

      <h3>What You'll Learn</h3>
      <ul>
        <li>Setting up a Next.js project from scratch</li>
        <li>Understanding file-based routing</li>
        <li>Server-side rendering vs client-side rendering</li>
        <li>Data fetching with getStaticProps and getServerSideProps</li>
        <li>Dynamic routes and API routes</li>
      </ul>
    `,
    category: "TECHNOLOGY",
    author: "Tech Channel",
    authorImage: null,
    date: "October 21, 2022",
    readTime: "8 min read"
  },
  {
    slug: "mastering-tailwind-css",
    url: "https://www.youtube.com/watch?v=gfU1iZnjRZM",
    title: "Mastering Tailwind CSS in 30 Minutes",
    description:
      "A comprehensive guide to Tailwind CSS utility classes and responsive design.",
    content: `
      <p>Tailwind CSS has revolutionized the way we write CSS. Instead of writing custom CSS for every component, you can compose designs directly in your markup using utility classes.</p>

      <p>This tutorial will take you through the core concepts of Tailwind CSS, from basic utilities to advanced responsive design patterns.</p>

      <h3>Key Topics Covered</h3>
      <ul>
        <li>Understanding utility-first CSS</li>
        <li>Responsive design with Tailwind</li>
        <li>Customizing your Tailwind configuration</li>
        <li>Dark mode implementation</li>
        <li>Component extraction and reusability</li>
      </ul>
    `,
    category: "DESIGN",
    author: "Design Pro",
    authorImage: null,
    date: "October 20, 2022",
    readTime: "6 min read"
  },
  {
    slug: "react-hooks-explained",
    url: "https://www.youtube.com/watch?v=Tn6-PIqc4UM",
    title: "React Hooks Explained - useEffect, useState, and More",
    description:
      "Deep dive into React Hooks and how to use them effectively in your applications.",
    content: `
      <p>React Hooks have transformed how we write React components. They allow you to use state and other React features without writing a class.</p>

      <p>In this video, we'll explore the most commonly used hooks and learn best practices for using them in your applications.</p>

      <h3>Hooks We'll Cover</h3>
      <ul>
        <li>useState for managing component state</li>
        <li>useEffect for side effects and lifecycle</li>
        <li>useContext for consuming context</li>
        <li>useRef for accessing DOM elements</li>
        <li>Custom hooks for reusable logic</li>
      </ul>
    `,
    category: "DEVELOPMENT",
    author: "Code Master",
    authorImage: null,
    date: "October 19, 2022",
    readTime: "10 min read"
  },
  {
    slug: "building-rest-apis-nodejs",
    url: "https://www.youtube.com/watch?v=SLpUKAGnm-g",
    title: "Building REST APIs with Node.js and Express",
    description:
      "Learn how to create robust RESTful APIs using Node.js and Express framework.",
    content: `
      <p>Building a solid API is crucial for modern web applications. In this tutorial, we'll learn how to create a RESTful API using Node.js and Express.</p>

      <p>We'll cover everything from basic routing to advanced topics like authentication and error handling.</p>

      <h3>What You'll Build</h3>
      <ul>
        <li>Setting up Express server</li>
        <li>Creating RESTful routes</li>
        <li>Connecting to MongoDB</li>
        <li>Implementing authentication with JWT</li>
        <li>Error handling and validation</li>
      </ul>
    `,
    category: "BACKEND",
    author: "Server Side",
    authorImage: null,
    date: "October 18, 2022",
    readTime: "12 min read"
  },
  {
    slug: "javascript-es6-features",
    url: "https://www.youtube.com/watch?v=i_23KUAEtUM",
    title: "JavaScript ES6+ Features You Must Know",
    description:
      "Explore the latest JavaScript features including arrow functions, destructuring, and more.",
    content: `
      <p>JavaScript has evolved significantly with ES6 and beyond. These new features make your code more concise, readable, and powerful.</p>

      <p>This tutorial covers all the essential ES6+ features you need to know to write modern JavaScript.</p>

      <h3>Features Covered</h3>
      <ul>
        <li>Arrow functions and lexical this</li>
        <li>Template literals</li>
        <li>Destructuring assignments</li>
        <li>Spread and rest operators</li>
        <li>Promises and async/await</li>
      </ul>
    `,
    category: "JAVASCRIPT",
    author: "JS Guru",
    authorImage: null,
    date: "October 17, 2022",
    readTime: "9 min read"
  },
  {
    slug: "ui-ux-design-principles",
    url: "https://www.youtube.com/watch?v=UBOj6rqRUME",
    title: "UI/UX Design Principles for Developers",
    description:
      "Essential design principles every developer should know to create better user experiences.",
    content: `
      <p>Great design is not just about aesthetics—it's about creating intuitive and delightful user experiences. As a developer, understanding design principles will help you build better products.</p>

      <p>This video covers fundamental UI/UX principles that every developer should know.</p>

      <h3>Key Principles</h3>
      <ul>
        <li>Visual hierarchy and typography</li>
        <li>Color theory and accessibility</li>
        <li>Spacing and layout principles</li>
        <li>User flow and navigation</li>
        <li>Responsive design patterns</li>
      </ul>
    `,
    category: "DESIGN",
    author: "UX Designer",
    authorImage: null,
    date: "October 16, 2022",
    readTime: "7 min read"
  },
  {
    slug: "typescript-crash-course",
    url: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    title: "TypeScript Crash Course for Beginners",
    description:
      "Get started with TypeScript and learn how to add type safety to your JavaScript projects.",
    content: `
      <p>TypeScript adds optional static typing to JavaScript, helping you catch errors early and write more maintainable code.</p>

      <p>This crash course will get you up and running with TypeScript quickly, covering all the essential concepts.</p>

      <h3>Topics Included</h3>
      <ul>
        <li>Basic types and type annotations</li>
        <li>Interfaces and type aliases</li>
        <li>Generics and utility types</li>
        <li>Classes and decorators</li>
        <li>Configuring TypeScript projects</li>
      </ul>
    `,
    category: "TECHNOLOGY",
    author: "Type Master",
    authorImage: null,
    date: "October 15, 2022",
    readTime: "11 min read"
  },
  {
    slug: "git-github-workflow",
    url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
    title: "Git and GitHub Workflow Best Practices",
    description:
      "Learn professional Git workflows and collaboration techniques for team projects.",
    content: `
      <p>Version control is essential for any software project. Git and GitHub provide powerful tools for collaboration and code management.</p>

      <p>This tutorial covers best practices for using Git in team environments, from basic commands to advanced workflows.</p>

      <h3>Workflow Topics</h3>
      <ul>
        <li>Git basics and branching strategies</li>
        <li>Pull requests and code reviews</li>
        <li>Merge vs rebase workflows</li>
        <li>Resolving merge conflicts</li>
        <li>CI/CD integration with GitHub Actions</li>
      </ul>
    `,
    category: "DEVELOPMENT",
    author: "Git Expert",
    authorImage: null,
    date: "October 14, 2022",
    readTime: "8 min read"
  },
  {
    slug: "docker-containerization-tutorial",
    url: "https://www.youtube.com/watch?v=SccSCuHhOw0",
    title: "Docker Tutorial - Containerize Your Applications",
    description:
      "Master Docker containerization and learn how to deploy applications efficiently.",
    content: `
      <p>Docker has revolutionized application deployment by making it easy to package and run applications in isolated containers.</p>

      <p>Learn how to containerize your applications and deploy them anywhere with Docker.</p>

      <h3>Docker Essentials</h3>
      <ul>
        <li>Understanding containers vs virtual machines</li>
        <li>Creating Dockerfiles</li>
        <li>Docker Compose for multi-container apps</li>
        <li>Container orchestration basics</li>
        <li>Best practices for production</li>
      </ul>
    `,
    category: "DEVOPS",
    author: "DevOps Pro",
    authorImage: null,
    date: "October 13, 2022",
    readTime: "13 min read"
  }
];

export function getVideoBySlug(slug) {
  return videos.find(video => video.slug === slug);
}

export function getAllVideos() {
  return videos;
}
