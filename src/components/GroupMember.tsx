import { FaDirections } from "react-icons/fa"

function GroupMember() {
  
    return (
      <div className="border bg-gray-300  p-3.5 mb-2">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2 ">
            <input type="checkbox" className="h-4 w-4 bg-gray-600 border-4 border-gray-300 rounded"/>
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 h-12 w-12 rounded-full">
                <img src="../" alt="" />
              </div>
              <div>
                <p className="text-gray-600 font-bold leading-none">Egresado 1</p>
                <p className="text-gray-600 leading-1 text-sm">3123-1231</p>
                <p className="text-gray-600 leading-none text-sm">egresado@mail.com</p>
              </div>
            </div>
          </div>
          <FaDirections className="text-gray-500"/>


        </div>
      </div>
    )
  }
  
  export default GroupMember