import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { Header } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const Pyramid = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white  rounded-3xl'>
      <Header category="Chart" title="Pyramid Chart" />
      <div className='w-full'>
        <AccumulationChartComponent
          id="pyramid-chart"
          legendSettings={{ background: 'white', visible: true, position: 'Right', textStyle: { color: currentMode === 'Dark' ? 'white' : 'black' } }}
          height="420px"
          //background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          tooltip={{ enable: true, format: '${point.x} : <b>${point.y}%</b>' }}
        >
          <Inject services={[AccumulationLegend, PyramidSeries, AccumulationDataLabel, AccumulationTooltip, AccumulationSelection]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              name="Food"
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              neckWidth="15%"
              gapRatio={0.03}
              explode
              emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
              dataLabel={{ visible: true, position: 'Inside', name: 'text', font: { fontWeight: '600', color: '#fff' } }}
              title="Food Comparison Chart"
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  )
}

export default Pyramid