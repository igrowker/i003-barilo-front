const excursions = [
  {
    id: 1,
    name: 'Mountain Hiking',
    description: 'Experience breathtaking views while hiking through mountain trails.',
    details: 'Duration: 4 hours, Difficulty: Medium, Guide included',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080'
  },
  {
    id: 2,
    name: 'River Rafting',
    description: 'Thrilling whitewater rafting adventure.',
    details: 'Duration: 3 hours, Difficulty: High, Safety equipment included',
    image: 'https://images.unsplash.com/photo-1692095296859-60427614df87?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'City Tour',
    description: 'Explore the rich history and culture of the city.',
    details: 'Duration: 2 hours, Difficulty: Easy, Guide included',
    image: 'https://plus.unsplash.com/premium_photo-1718146019167-110481171ad2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
]

const Excursions: React.FC = () => {
 

  const handleJoin = (excursionName: string) => {
    alert(`You have joined the ${excursionName}!`)
  }

  return (
    <div className="container px-5 pt-7  pb-16 mx-auto">
      <h2 className="text-2xl text-[#006BA8] font-bold mb-6">Excursiones</h2>
      <div className="flex flex-col gap-8">
        {excursions.map(excursion => (
          <div key={excursion.id} className="border p-4 rounded-lg shadow-lg">
            <img src={excursion.image} alt={excursion.name} className="w-full h-64 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-4">{excursion.name}</h3>
            <p className="text-gray-700 mt-2">{excursion.description}</p>
            <p className="text-gray-600 mt-2">{excursion.details}</p>
            <button
              onClick={() => handleJoin(excursion.name)}
              className="mt-4 px-4 py-2 bg-[#006BA8] text-white font-bold rounded-md hover:bg-[#005482]"
            >
              Unirse
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Excursions
