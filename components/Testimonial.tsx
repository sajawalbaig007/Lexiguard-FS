import { FaUserCircle } from "react-icons/fa";

const team = [
  {
    name: "",
    role: "Project & Operations Lead",
    description:
      "Oversees project execution and ensures smooth operational workflows across the platform.",
  },
  {
    name: "",
    role: "Legal & Business Lead",
    description:
      "Handles legal strategy and business development, ensuring compliance and growth.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Meet Our Team
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          The people behind LexiGuard making legal workflows simple and efficient.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition duration-300 flex flex-col items-center text-center border border-gray-100"
          >
            {/* Avatar */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-[#9E8F74]/10 text-[#9E8F74] mb-5 group-hover:bg-[#9E8F74]/20 transition">
              <FaUserCircle size={70} />
            </div>

            {/* Name */}
            <h3 className="text-gray-900 font-semibold text-xl">
              {member.name}
            </h3>

            {/* Role */}
            <p className="text-[#9E8F74] text-sm font-medium mb-3">
              {member.role}
            </p>

            {/* Divider */}
            <div className="w-10 h-1 bg-[#9E8F74] rounded-full mb-4 opacity-70"></div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}