import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils"
import { RiTimeLine } from "react-icons/ri";

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  value: number;  
  goal: number; 
  deadline: string;  
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, goal, deadline, ...props }, ref) => {
  const percentage = (value / goal) * 100;
  const { t } = useTranslation()
  
  return(
    <div>
      <p className="text-gray-500 text-sm mt-2">{t('progress.collected')}{value} {t('progress.of')}{goal}</p>
      <div className="flex justify-between items-center">
        <p className="text-blue-600 font-bold text-lg">{percentage}{t('progress.porcentage')}</p>
        <div className="flex items-center">
          <RiTimeLine className="text-gray-500" size={15}/>
          <p className="text-sm ml-0.5 text-gray-500">{deadline}</p>
        </div>
      </div>

      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "relative h-4 w-full overflow-hidden rounded-full bg-gray-200",
          className
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 bg-[#0043CE] transition-all"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        />
      </ProgressPrimitive.Root>

    </div>

  )
})
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
