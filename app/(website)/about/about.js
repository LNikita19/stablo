import Container from "@/components/container";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import TeamMember from "@/components/teammember";

export default function About({ authors, settings }) {
  // Team members data - replace with your actual team data later
  const teamMembers = [
    {
      name: "Rakesh Tembhurane",
      role: "Project Manager",
      image: "https://ui-avatars.com/api/?name=Rakesh+Tembhurane&background=0D8ABC&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Aman Surushe",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Aman+Surushe&background=6366F1&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Rutvik Raut",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Rutvik+Raut&background=8B5CF6&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Nikita Lilhore",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Nikita+Lilhore&background=EC4899&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Falguni Deshmukh",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Falguni+Deshmukh&background=F59E0B&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Diksha ",
      role: "UX Designer",
      image: "https://ui-avatars.com/api/?name=Diksha&background=10B981&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Samiksha ",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Samiksha&background=06B6D4&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Abhijit",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Abhijit&background=3B82F6&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Ayush",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Ayush&background=EF4444&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Arsad",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Arsad&background=14B8A6&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Aishwariya",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Aishwariya&background=A855F7&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Manimukta",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Manimukta&background=F97316&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "pooja",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Pooja&background=84CC16&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Nikhil",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Nikhil&background=6366F1&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Alexander Moore",
      role: "Software Engineer",
      image: "https://ui-avatars.com/api/?name=Alexander+Moore&background=059669&color=fff&size=400&bold=true",
      social: {
        facebook: "https://facebook.com",
        dribbble: "https://dribbble.com",
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    }
  ];

  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      {/* Team Section */}
      <div className="my-16 md:my-24">
      

        <div className="grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>

      <div className="prose mx-auto mt-14 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
