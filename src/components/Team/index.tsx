import { TeamType } from "@/types/team";
import SectionTitle from "../Common/SectionTitle";
import SingleTeam from "./SingleTeam";

const teamData: TeamType[] = [
  {
    id: 1,
    name: "Ashfaqur Rahman",
    designation: "Chief Coordinator",
    image: "/images/team/ashfaq.png",
    facebookLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 2,
    name: "Mahadi Sajjad Neloy",
    designation: "Systems Engineer",
    image: "/images/team/neloy.png",
    facebookLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 3,
    name: "Mumtahin Sifat",
    designation: "Marketing Lead",
    image: "/images/team/sifat.png",
    facebookLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Abid Hasan",
    designation: "IT Lead",
    image: "/images/team/abid.png",
    facebookLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Imranul Karim",
    designation: "Operation Manager",
    image: "/images/team/imran.png",
    facebookLink: "https://www.facebook.com/blackbeardimran",
    linkedinLink: "https://www.linkedin.com/in/imranulkarim/",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Rafia Safa",
    designation: "HR Lead",
    image: "/images/team/safa.png",
    facebookLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
  {
    id: 4,
    name: "Sultana Rajia",
    designation: "Project Strategist",
    image: "/images/team/trisha.png",
    facebookLink: "/#",
    linkedinLink: "/#",
    instagramLink: "/#",
  },
];

const Team = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <SectionTitle
            subtitle="Our Team"
            title="Meet Our Team"
            paragraph="Our team is passionate about youth empowerment, combining civic education and technology to foster growth and leadership."
            width="640px"
            center
          />
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          {teamData.map((team, i) => (
            <SingleTeam key={i} team={team} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
