import { useStateContext } from '../../utils/StateContext';
import './feature.scss'

const Feature = () => {
  const {dark} = useStateContext();

  return (
    <div className='feature' style={dark[3]}>
      <div className="container">
        <h1>Features that blows mind</h1>
        <p>We so opinion friends me message as delight. Whole front do of plate heard <br /> oh ought. His defective nor convinced residence own.</p>

        <div className="box">
          <div className="left" style={dark[0]}>
            <div className="smallBox" style={dark[4]}/>
            <div className="largeBox"/>
            <h4>Really boy law county she unable her sister</h4>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
          </div>
          <div className="middle" style={dark[0]}>
            <div className="smallBox" style={dark[4]}/>
            <div className="largeBox"/>
            <h4>Among sex are leave law built now</h4>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought.</p>
          </div>
          <div className="right">
            <div className="top" style={dark[0]}>
              <h4>Merits behind on afraid or warmly</h4>
            </div>
            <div className="bottom" style={dark[0]}>
              <h4>Believing neglected so so allowance existence</h4>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Feature