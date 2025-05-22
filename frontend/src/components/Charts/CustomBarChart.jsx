import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import CustomTooltip from './CustomTooltip'; 

const CustomBarChart = ({ data }) => {
  const getBarColor = (index) => (index % 2 === 0 ? '#5c8cf5' : '#ced9f2');
  

  return (
    <div className='bg-white mt-6'>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke='none' />
          <XAxis dataKey="category" tick={{ fontSize: 12, fill: "#555" }} stroke="none" />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke='none' />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart