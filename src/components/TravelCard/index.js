import {CardContainer, Image, MainHeading, Paragraph} from './styledComponents'

const TravelCard = props => {
  const {cardDetails} = props
  const {name, imageUrl, description} = cardDetails

  return (
    <CardContainer>
      <Image src={imageUrl} alt={name} />
      <MainHeading>{name}</MainHeading>
      <Paragraph>{description}</Paragraph>
    </CardContainer>
  )
}

export default TravelCard
