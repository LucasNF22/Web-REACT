import SkillsGrid from "../../components/SkillsGrid";

const Skills = () => {
  return (
    <div className="h-full py-16 xl:py-32 text-center xl:text-left ">
      <div className="container mx-auto flex flex-col gap-y-8 lg:items-start xl:flex-row gap-x-20 pl-10">
        <h2 className="h2 text-center">
          <span className="text-secondary">{"{"}</span>
          {"Herramientas"}
          <br />
          {" de "}
          <span className="text-accent">{"desarrollo"}</span>
          <span className="text-secondary">{"}"}</span>
        </h2>
        <div>
          <SkillsGrid />
        </div>
      </div>
    </div>
  );
};

export default Skills;
