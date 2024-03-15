import Image from "next/image"

export const EmptySearch = () => {
  return (
    <div className='flex flex-col h-full items-center justify-center'>
      <Image
        src='/empty-search.svg'
        alt='Empty Search'
        height={140}
        width={140}
      />
      <h2 className='text-2xl font-semibold mt-6'>
        No boards found for your search.
      </h2>
      <p className='text-muted-foreground text-sm mt-2'>
        {" "}
        Try a different search term!
      </p>
    </div>
  )
}
