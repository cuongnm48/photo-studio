import { cn } from "@/lib/utils"

// Define a reusable type for photo types
type PhotoType = {
  id: string
  label: string
  icon: React.ReactNode
}

interface PhotoMenuServerProps {
  photoTypes: PhotoType[]
  activeType: string
  dict: { [key: string]: any };
  lang: string
  path: string
}

export function PhotoMenuServer({ 
  photoTypes, 
  activeType, 
  dict,
  lang,
  path 
}: PhotoMenuServerProps) {
  return (
    <ul role="menu" aria-label={dict.id_photos.category}>
      {photoTypes.map((type) => (
        <li 
          key={type.id} 
          role="menuitem"
        >
          <a
            href={`/${lang}/${path}?type=${type.id}`}
            aria-current={activeType === type.id ? 'page' : undefined}
            title={`View ${type.label.toLowerCase()} photos`}
            className={cn(
              "flex items-center px-4 py-3 rounded-lg text-sm font-medium",
              "transition-all duration-200 ease-in-out",
              activeType === type.id
                ? "bg-gray-300 text-gray-900 shadow-md"
                : "text-gray-700 hover:bg-gray-200 hover:shadow"
            )}
          >
            <span className="sr-only">Select </span>
            {type.icon}
            <span className="ml-3">{type.label}</span>
            {activeType === type.id && (
              <span 
                className="ml-auto w-2 h-2 bg-gray-500 rounded-full"
                aria-hidden="true"
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}