'use client';

import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar';
import CourseCard from '../components/CourseCard';

const enrolled = [
  {
    id: 1,
    title: "Advanced React Patterns",
    description: "Master advanced React concepts including compound components, render props, and custom hooks.",
    duration: "12h",
    level: "Advanced",
    students: "12k",
    progress: 75
  },
  {
    id: 2,
    title: "TypeScript Mastery",
    description: "Deep dive into TypeScript with generics, utility types, and advanced type inference.",
    duration: "8h",
    level: "Intermediate",
    students: "8k",
    progress: 45
  },
  {
    id: 3,
    title: "System Design",
    description: "Learn to design scalable systems with real-world case studies and best practices.",
    duration: "15h",
    level: "Advanced",
    students: "20k",
    progress: 30
  },
];

const recommended = [
  {
    id: 4,
    title: "Node.js Backend Development",
    description: "Build robust REST APIs and microservices with Node.js, Express, and MongoDB.",
    duration: "10h",
    level: "Intermediate",
    students: "15k",
    progress: 0
  },
  {
    id: 5,
    title: "Docker & Kubernetes",
    description: "Master containerization and orchestration for modern cloud-native applications.",
    duration: "14h",
    level: "Advanced",
    students: "9k",
    progress: 0
  },
  {
    id: 6,
    title: "GraphQL APIs",
    description: "Build flexible and efficient APIs using GraphQL, Apollo Server, and React.",
    duration: "6h",
    level: "Intermediate",
    students: "6k",
    progress: 0
  },
];

export default function CoursesPage() {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0a0a0f]">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 lg:p-6 pt-16 lg:pt-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4"
        >
          <h1 className="text-3xl font-bold text-white">My Courses</h1>
          <input
            type="text"
            placeholder="Search courses..."
            className="bg-[#111118] border border-white/10 rounded-2xl px-5 py-3 w-full md:w-80 focus:outline-none focus:border-violet-500 text-white placeholder:text-white/30 transition-colors"
          />
        </motion.div>

        {/* Enrolled Courses */}
        <section className="mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-semibold mb-6 text-white/70"
          >
            Currently Enrolled
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolled.map((course, index) => (
              <CourseCard key={course.id} course={course} enrolled index={index} />
            ))}
          </div>
        </section>

        {/* Recommended Courses */}
        <section>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl font-semibold mb-6 text-white/70"
          >
            Recommended For You
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommended.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index + 3} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}