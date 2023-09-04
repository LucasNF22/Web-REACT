import SkilsGrid from "../../components/SkilsGrid";

const Skils = () => {
  return(
    <div className="container mx-auto py-32 text-center xl:text-left flex items-start justify-center gap-10 h-full ">
      <h2 className='h2'>
        <span className="text-secondary">{'{'}</span>{'Tecnologías'}<br />
        <span className="text-accent">{'Utilizadas'}</span>
        <span className="text-secondary">{'}'}</span>
      </h2>
      <SkilsGrid/>

    </div>
  )
};

export default Skils;
