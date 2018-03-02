const OneDream = ({dream}) => dream

export default ({
  dreams=[]
}) => dreams.length
  ? <ul> {
    dreams.map(dream => <OneDream dream={dream} />)
  } </ul>
  : 'No dreams here.'