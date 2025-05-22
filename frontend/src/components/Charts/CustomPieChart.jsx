import React from "react";
import CustomTooltip from "./CustomTooltip";
import CustomLegend from "./CustomLegend";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";

const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor,
}) => {

  // Fallback if totalAmount is null
  const displayAmount = totalAmount || "$0";

  return (
    <div className="relative w-full h-[380px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={130}
            innerRadius={100}
            label={false}
            isAnimationActive={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>

      {showTextAnchor && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-xl font-bold text-black">{displayAmount}</p>
        </div>
      )}
    </div>
  );
};

export default CustomPieChart;



