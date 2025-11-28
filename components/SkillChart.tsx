import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { SKILL_CHART_DATA } from '../constants';

const SkillChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] sm:h-[450px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={SKILL_CHART_DATA}>
          {/* Light gray grid lines */}
          <PolarGrid stroke="#e2e8f0" strokeWidth={1} />
          
          {/* Clean typography for axes */}
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#64748b', fontSize: 12, fontWeight: 500, fontFamily: 'Inter' }} 
          />
          
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 100]} 
            tick={false} 
            axisLine={false} 
          />
          
          {/* Blue Radar filled with opacity */}
          <Radar
            name="Skill Level"
            dataKey="A"
            stroke="#3b82f6" // Blue-500
            strokeWidth={3}
            fill="#3b82f6"   // Blue-500
            fillOpacity={0.35}
            isAnimationActive={true}
          />
          
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              borderColor: '#e2e8f0',
              borderRadius: '0px',
              color: '#0f172a',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
              padding: '8px 12px'
            }}
            itemStyle={{ color: '#3b82f6', fontWeight: 600 }}
            cursor={false}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;