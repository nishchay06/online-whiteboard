import Image from "next/image"

export const EmptyFavorites = () => {
  return (
    <div className='flex flex-col h-full items-center justify-center'>
      <Image
        src='/empty-favorites.svg'
        alt='No favorites found'
        height={140}
        width={140}
      />
      <h2 className='text-2xl font-semibold mt-6'>No favorites found</h2>
      <p className='text-muted-foreground text-sm mt-2'>
        {" "}
        Try favoriting a board!
      </p>
    </div>
  )
}
