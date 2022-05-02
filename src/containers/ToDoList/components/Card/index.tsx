import { TTask } from '@/pages/lista-de-tarefas'
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
      <S.HeaderContent color={priority?.color || '#D8D8D8'}>
        <p>
          <b>{id}:</b> {user?.username}
        </p>

        <p>{priority?.name}</p>
      </S.HeaderContent>
      <S.BodyContent>
        <p>{description}</p>
        <img
          src={`https://ui-avatars.com/api/?background=${priority.color.replace(
            '#',
            ''
          )}&name=${user?.username}`}
          alt={user?.username}
        />
      </S.BodyContent>
      <S.FooterContent>
        <b>Tipo:</b> <p>{task_type?.name}</p>
      </S.FooterContent>
    </S.Container>
  )
}

export default Card
