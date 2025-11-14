import Image from "next/image";
import Link from "next/link";

export default function TeamMember({ member }) {
  return (
    <div className="group">
      {/* Member Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Member Info */}
      <div className="mt-4 text-center">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {member.name}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
          {member.role}
        </p>

        {/* Social Links */}
        {member.social && (
          <div className="mt-4 flex justify-center gap-3">
            {member.social.facebook && (
              <Link
                href={member.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
            )}
            {member.social.dribbble && (
              <Link
                href={member.social.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0C5.375 0 0 5.375 0 12c0 6.627 5.375 12 12 12 6.627 0 12-5.373 12-12 0-6.625-5.373-12-12-12zm8.922 6.094c1.219 1.563 1.953 3.516 2.016 5.625-.281-.063-3.094-.625-5.906-.266-.062-.156-.125-.313-.219-.5-.156-.375-.313-.75-.5-1.125 2.969-1.219 4.313-2.969 4.609-3.734zM12 2.047c2.344 0 4.469.906 6.094 2.375-.25.406-1.469 1.969-4.328 3.094-1.406-2.594-2.969-4.719-3.203-5.031.469-.094.969-.156 1.437-.156v-.282zm-3.422.906c.219.281 1.781 2.422 3.188 5.031-4.031 1.078-7.594 1.047-7.969 1.047.563-2.656 2.344-4.844 4.781-6.078zm-6.531 9.047v-.281c.375 0 4.531.047 8.813-1.219.219.406.406.813.594 1.234-.125.031-.219.063-.344.094-4.438 1.438-6.781 5.375-6.938 5.719A9.96 9.96 0 0 1 2.047 12zM12 21.953a9.95 9.95 0 0 1-6.188-2.156c.125-.344 1.969-3.656 6.875-5.375l.031-.016c1.25 3.234 1.766 5.953 1.891 6.719-1.469.531-3.031.828-4.609.828zm6.703-1.437c-.094-.531-.563-3.125-1.719-6.313 2.594-.406 4.875.266 5.156.344a9.984 9.984 0 0 1-3.437 5.969z" />
                </svg>
              </Link>
            )}
            {member.social.github && (
              <Link
                href={member.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            )}
            {member.social.linkedin && (
              <Link
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-600 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
