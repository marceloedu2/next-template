import { TTask } from '../..'
import * as S from './styles'

const Card = ({
  id,
  description,
  task_type,
  priority,
  user,
  ...props
}: TTask) => {
  return (
    <S.Container {...props}>
      <S.HeaderContent>
        <b>{user?.username}</b>

        <p>Id: {id}</p>
      </S.HeaderContent>
      <S.BodyContent>
        <p>{description}</p>
        <img
          src={`https://ui-avatars.com/api/?bold=true&background=${priority.color.replace(
            '#',
            ''
          )}&name=${user?.username}`}
          alt={user?.username}
        />
      </S.BodyContent>
      <S.FooterContent color={priority?.color || '#D8D8D8'}>
        <div>
          <p>Tipo:</p> <p>{task_type?.name}</p>
        </div>
        <span />
      </S.FooterContent>
    </S.Container>
  )
}

export default Card
