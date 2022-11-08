import { useRef } from "react"
import { Text } from "react-native"
import Container from "./Container"

const RenderCounter = () => {
  const renderCount = useRef(0)

  renderCount.current += 1

  return (
    <Container>
      <Text>Render Count: {renderCount.current}</Text>
    </Container>
  )
}

export default RenderCounter
