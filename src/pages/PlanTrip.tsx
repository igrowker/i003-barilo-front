import CampaignCard from "@/components/CampaignCard"
import GroupCard from "@/components/GroupCard"
import { IconButton } from "@/components/IconButton"
import { FaRegBell, FaRegUser } from "react-icons/fa"
import { RiAddFill } from "react-icons/ri"

function PlanTrip() {

  const handleCreateCampaign = () => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// create campaign
		console.log(`Create campaign`)
	}
  const handleCreateGroup = () => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// create Group
		console.log(`Create campaign`)
	}

  return (
    <div className="flex-col mt-3 mx-3">
      <section>
        <div className="flex justify-between">
          <div className='flex'>
            <div className="p-3 bg-gray-300 rounded-lg">
              <FaRegUser size={25}/>
            </div>
            <div className='col ml-2'>
              <p className="font-black "> Marcos Perez</p>{/* {user.name} */}
              <p className="leading-none">Administrator</p>{/* {user.rol} */}
            </div>
          </div>
          <div className="p-2 my-1 border bg-gray-300 rounded-lg">
            <FaRegBell size={20}/>
          </div>
        </div>
        <IconButton
          icon={RiAddFill}
          label='Crear campaña'
          className='bg-gray-300 mt-3'
          onClick={handleCreateCampaign}
        />
        <IconButton
          icon={RiAddFill}
          label='Crear grupo de viaje'
          className='bg-gray-300 mt-1'
          onClick={handleCreateGroup}
        />
      </section>
      <section className="mt-3">
        <h1 className="mb-3 text-lg font-black text-gray-700"> Mis campañas creadas</h1>
        <CampaignCard/>
        <h1 className="mb-3 mt-3 text-lg font-black text-gray-700"> Mis grupos de egresados</h1>
        <GroupCard/>
      </section>

    </div>
  )
}



export default PlanTrip;
