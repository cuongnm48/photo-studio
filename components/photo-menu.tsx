"use client"

import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useCallback } from "react"
import { PhotoMenuServer } from "./PhotoMenuServer"

interface PhotoType {
  id: string
  label: string
  icon: React.ReactNode
}

interface PhotoMenuProps {
  photoTypes: PhotoType[]
  activeType: string
}

export function PhotoMenu({ photoTypes, activeType }: PhotoMenuProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const router = useRouter()
  
  const handleClick = useCallback((e: React.MouseEvent<HTMLElement>, typeId: string) => {
    e.preventDefault()
    router.push(`?type=${typeId}`, { scroll: false })
    setIsExpanded(false)
  }, [router])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement
    const link = target.closest('a')
    if (link) {
      const typeId = new URLSearchParams(link.search).get('type')
      if (typeId) handleClick(e, typeId)
    }
  }, [handleClick])

  const toggleExpand = useCallback(() => {
    setIsExpanded(prev => !prev)
  }, [])

  return (
    <div className="sticky top-2 z-40">
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 p-2 rounded-lg shadow-sm">
        <button 
          className="flex justify-between items-center w-full lg:w-72 lg:mb-4"
          onClick={toggleExpand}
          aria-expanded={isExpanded}
          aria-controls="photo-menu-nav"
        >
          <h3 className="text-lg font-semibold text-gray-800">Danh mục ảnh thẻ</h3>
          <span className="md:hidden">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5" />
            ) : (
              <ChevronDown className="h-5 w-5" />
            )}
          </span>
        </button>

        <nav 
          id="photo-menu-nav"
          className={cn(
            "space-y-2 transition-all duration-300 ease-in-out",
            "visible md:block",
            {
              'h-auto opacity-100': isExpanded,
              'h-0 opacity-0 invisible md:visible md:h-auto md:opacity-100': !isExpanded
            },
            "overflow-hidden"
          )}
          onClick={handleNavClick}
        >
          <PhotoMenuServer photoTypes={photoTypes} activeType={activeType} />
        </nav>
      </div>
    </div>
  )
}
