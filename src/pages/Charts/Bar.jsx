import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';

const Bar = () => {
  return (
    
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category="Bar" title="Olympic Medals - RIO" />
      <div className='w-full'>
        <ChartComponent
          id="bar-chart"
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background='transparent'
          legendSettings={{ background: 'white' }}
          height='480px'
        >
          <Inject services={[Legend, Category, Tooltip, ColumnSeries, DataLabel]} />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Bar