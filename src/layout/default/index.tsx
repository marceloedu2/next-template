import Header from '@/components/Header'
import * as S from './styles'

const LayoutDefault: React.FC = ({ children }) => {
  return (
    <S.Container>
      <Header />
      <S.Content>{children}</S.Content>
    </S.Container>
  )
}

export default LayoutDefault
