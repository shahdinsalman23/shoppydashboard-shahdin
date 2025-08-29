import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, Inject, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const PieChart = ({ id, data, legendVisiblity, dataLabel, height }) => {
  const { currentMode } = useStateContext();
  return (
    <div className='w-full'>
      <AccumulationChartComponent
        id={id}
        height={height}
        legendSettings={{ visible: legendVisiblity }}
        enableSmartLabels={true}
        enableBorderOnMouseMove={true}
        tooltip={{ enable: true }}
       // background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Sale"
            dataSource={pieChartData}
            xName="x"
            yName="y"
            innerRadius="40%"
            startAngle={0}
            endAngle={360}
            radius="70%"
            explode
            explodeOffset="10%"
            explodeIndex={2}
            dataLabel={{
              visible: true,
              position: 'Inside',
              name: 'text',
              font: {
                fontWeight: '600',
                color: '#fff'
              }
            }}
             title="Project Cost Breakdown"
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  )
}

export default PieChart