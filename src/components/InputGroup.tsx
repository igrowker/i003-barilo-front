import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { useState } from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface InputGroupProps {
    onSearch: (query: string) => void;
}

export default function InputGroup({ onSearch }: InputGroupProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query);  
    };


  return (
    <div className="relative w-full max-w-screen rounded-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-1 ">
        <Button variant="ghost" size="icon" className="h-8 w-8 bg-white rounded-full">
          <AdjustmentsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Filtrar</span>
        </Button>
      </div>
      <Input 
        type="text" 
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="" 
        className="pl-12 pr-12 rounded-full border-none bg-[--inactive-button-bg] h-10" 
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-1">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Search className="h-4 w-4" />
          <span className="sr-only">Buscar</span>
        </Button>
      </div>
    </div>
  )
}