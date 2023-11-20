import { Button } from "@/components/ui/button"
import { Medal } from "lucide-react"
import Link from "next/link"
import { poppins, roboto_mono } from "@/components/ui/fonts"
import { cn } from "@/lib/utils"


const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className={cn(
          "mb-4 flex items-center border shadow-sm p-4 bg-yellow-100 text-yellow-700 rounded-full uppercase",
          poppins.className
        )}>
          <Medal className="h-6 w-6 mr-2" />
          Rated No. 1 in the World
        </div>
        <h1 className={cn(
          "text-3xl capitalize md:text-6xl text-center text-neutral-800 mb-6",
          poppins.className
        )}>
          GC-Task helps the team
        </h1>
        <div className={cn(
          "text-3xl capitalize md:text-6xl bg-gradient-to-r from-violet-600 to-purple-600 text-white px-4 rounded-md py-2 w-fit",
          poppins.className  
        )}>
          get it done.
        </div>
      </div>
      <div className={cn(
        "text-sm md:text-xl text-neutral-400 mt-4 max-w-sx md:max-w-2xl text-center mx-auto",
        roboto_mono.className
      )}>
        Designed to streamline online collaboration effortlessly. A user-friendly interface and customizable boards empower users to efficiently organize tasks, set deadlines, and enhance team productivity. 
      </div>
      <Button className={cn(
        "mt-6",
        roboto_mono.className
      )} 
      size="lg" 
      asChild>
        <Link href="/sign-up">
          Get GC-Task for Free
        </Link>
      </Button>
    </div>
  )
}

export default MarketingPage