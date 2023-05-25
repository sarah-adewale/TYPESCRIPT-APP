import { Row, Col } from 'react-bootstrap'
import storeItems from '../data/items.json'
import { StoreItem } from '../components/StoreItem'

export function Store() {
  return (
    <>
      
      <Row md={2} xs={1} lg={3} className='g-3 mt-3'>
        {storeItems.map(item => (
          <Col key={item.id}><StoreItem {...item}/></Col>
        ))}
        
      </Row>
    </>
    
  )
}
