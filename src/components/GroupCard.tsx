import { RiAddFill } from "react-icons/ri"
import { IconButton } from "./IconButton"


function GroupCard() {

    const handleSeeGroupDetails = () => (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		// create Group
		console.log(`See group details`)
	}

    return (
      <div className="border border-gray-400 rounded-md p-3.5">
        <div className="bg-gray-300 h-[7em] rounded-md"/>
        {/* <img src={imageUrl} alt={title} /> */}
        <p><b>Titulo del viaje</b></p>
        {/* <p>{title}</p> */}
        <p>Viaje a Mar del Plata grupo "NNN"</p>
        {/* <p>{description}</p> */}
        <IconButton
          icon={RiAddFill}
          label='Ver detalle'
          className='bg-[#8C53FF] mt-3'
          onClick={handleSeeGroupDetails}
        />
      </div>
    )
  }
  
  export default GroupCard