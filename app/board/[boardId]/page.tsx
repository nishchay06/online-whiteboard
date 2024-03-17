import { Canvas } from "./_components/canvas"

interface BoardIdPageProps {
  params: {
    boardId: string
  }
}

const boardIdPage = ({ params }: BoardIdPageProps) => {
  return <Canvas boardId={params.boardId}/>
}

export default boardIdPage
