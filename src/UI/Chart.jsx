const data = {
    labels: [
        "کل پروژه ها",
        "پروژه های به اتمام رسیده",
        "پروژه های درحال انجام"
    ],
    datasets:[{
        label:"آمار",
        data:[12,2,0],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
    }]
}
const config = {
    type:'pie',
    data:data
}
import { Chart } from 'chart.js'
import React from 'react'
import { PieChart } from 'recharts'

function FreeLancerChart() {
  return (

  )
}

export default FreeLancerChart