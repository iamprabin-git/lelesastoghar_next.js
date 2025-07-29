// components/MeetOurTeam.js
import TeamMembers from "@/constants/teamMember";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function MeetOurTeam() {
  return (
    <section className="py-6 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Meet Our Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-1 justify-items-center">
        {TeamMembers.map((member, index) => (
          <div
            key={index}
            className="w-64 h-80 perspective"
          >
            <div className="relative w-full h-full transition-transform duration-700 transform-style preserve-3d hover:rotate-y-180">
              {/* Front Side */}
              <div className="absolute w-full h-full backface-hidden bg-gradient-to-r from-green-400 via-blue-300 to-blue-500 dark:bg-gray-800 rounded-lg shadow-lg p-5 text-center">
                <Image
                  width={100}
                  height={100}
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-400">{member.position}</p>
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white dark:bg-gray-700 rounded-lg shadow-lg p-5 flex flex-col justify-center items-center">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.position}</p>
                <div className="flex justify-center gap-2">
                  {member.socials.map((social, idx) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={idx}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-5 h-5 text-gray-500 hover:text-blue-600" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MeetOurTeam;
