import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes;
  
    const marksChartData = marksData.map(studentData => {
      const physics = studentData.marks.physics;
      const chemistry = studentData.marks.chemistry;
      const math = studentData.marks.math;
      const avg = ((physics + chemistry + math) / 3).toFixed(2);
  
      return {
        id: studentData.student_id,
        name: studentData.name,
        physics,
        chemistry,
        math,
        avg: parseFloat(avg)
      };
    });


    return (
        <div>
            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='blue'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;