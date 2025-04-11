let Fullname: string = "Patrick T Rumanzi";
let FirstName: string = "Patrick";
let LastName: string = "Rumanzi";
let Age: number = 26;
let YearsOfExperience: number = 5;
let isEmployed: boolean = false;
let isAvailable: boolean = true;
let techStack: string[] = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Python",
  "Django",
  "Flask",
  "Java",
  "Spring",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "REST",
  "Next.js",
  "ML",
  "LangChain",
];

function HireHim(Fullname: string, Age: number, YearsOfExperience: number) {
  console.log(
    `Hire ${Fullname} who is ${Age} years old and has ${YearsOfExperience} years of experience.`
  );
  console.log(`${FirstName} has the following skills: ${techStack.join(", ")}`);
}

if (YearsOfExperience >= 5 && isEmployed === false) {
  HireHim(Fullname, Age, YearsOfExperience);
}
