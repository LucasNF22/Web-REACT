import SkillsGrid from "../../components/SkillsGrid";

const Skills = () => {
  return(
    <div className="container mx-auto py-32 text-center xl:text-left flex items-start justify-center gap-10 h-full ">
      <h2 className='h2'>
        <span className="text-secondary">{'{'}</span>{'Tecnologías'}<br />
        <span className="text-accent">{'Utilizadas'}</span>
        <span className="text-secondary">{'}'}</span>
      </h2>
      <SkillsGrid/>

    </div>
  )
};

export default Skills;
