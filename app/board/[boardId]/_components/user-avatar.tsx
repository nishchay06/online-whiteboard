import { Hint } from "@/components/hint"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"

interface UserAvatarProps {
  src?: string
  name?: string
  fallback?: string
  borderColor?: string
}

export const UserAvatar = ({
  src,
  name,
  fallback,
  borderColor,
}: UserAvatarProps) => {
  return (
    <Hint label={name || "Teammate"} side='bottom' sideOffset={18}>
      <Avatar
        className=' rounded-full h-8 w-8 border-2'
        style={{ borderColor }}
      >
        <AvatarImage className='rounded-full' src={src} />
        <AvatarFallback className='text-xs font-semibold'>
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  )
}
