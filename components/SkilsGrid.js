const skills = [
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kaasdadsjh',
        type: 'front',
    },
    {
        name: 'kasddajh',
        type: 'front',
    },
    {
        name: 'kasjasdah',
        type: 'front',
    },
    {
        name: 'kasdasdasdadjh',
        type: 'front',
    },
    {
        name: 'kaasdasjh',
        type: 'front',
    },
    {
        name: 'kadassjh',
        type: 'front',
    },
    {
        name: 'kajh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kaasdasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    {
        name: 'kasjh',
        type: 'front',
    },
    
]

const SkilsGrid = () => {
  return (
    <section className="flex flex-wrap gap-6 max-w-[700px] justify-center group">
        {
            skills.map((skill, index) =>{
                return(
                    <div key={index} className="bg-blanco px-8 py-2 rounded-lg text-primary font-inter font-semibold border border-secondary hover:drop-shadow-glow ">{skill.name}</div>
                )
            })
        }
    </section>
  )
}

export default SkilsGrid;