
import React from 'react';
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useTranslation } from 'react-i18next';

const HomeEventComponent: React.FC  = () => {

    const { t } = useTranslation();

    const [date, setDate] = React.useState<Date>()

    return (
        <div className='bg-[#0098EF] h-44 justify-between flex flex-col rounded-2xl'>
            <div className='p-5'>
                <h1 className="font-['League_Spartan'] text-2xl text-[#E4E4E4] font-bold">{t('home.cardEvent.title')}</h1>
                <p className="text-[#E4E4E4] font-bold">{t('home.cardEvent.description')}</p>
            </div>
            <Popover>
                <PopoverTrigger asChild>
                <Button
                    variant={"default"}
                    className={cn(
                        "w-[120px] justify-center font-normal ml-5 mb-5 bg-[#006BA8] border-none rounded-2xl",
                        
                    )}
                    >
                    <span className='text-[#FAFAFA]'>17h:13m:5s</span>
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div>
    )
  }
  
  export default HomeEventComponent