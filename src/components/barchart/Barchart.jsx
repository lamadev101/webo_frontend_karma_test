import './barchart.scss'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { useStateContext } from '../../utils/StateContext'

const Barchart = () => {
  const { dark} = useStateContext()
  const data = [
    {
      "day": "M",
      "balance": 20
    },
    {
      "day": "T",
      "balance": 25
    },
    {
      "day": "W",
      "balance": 30
    },
    {
      "day": "T",
      "balance": 45
    },
    {
      "day": "F",
      "balance": 25
    },
    {
      "day": "S",
      "balance": 40
    },
    {
      "day": "S",
      "balance": 30
    }
  ]

  return (
    <div className='barChart' style={dark[1]}>
      <h3>Total Balance</h3>
      <h2 className='title'>$40,000 <small>+40%</small></h2>
      <ResponsiveContainer width="100%" aspect={1.5}>
      <BarChart width={500} height={300} data={data} >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="balance" fill="#8884d8" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  )



}

export default Barchart