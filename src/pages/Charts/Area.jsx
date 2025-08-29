import React from 'react'
import {  ChartComponent, SeriesCollectionDirective, SeriesDirective, AreaSeries, SplineAreaSeries, Inject, DateTime, Legend, } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis } from '../../data/dummy';
import { Header } from '../../components';

const Area = () => {

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <Header category="Area" title="Inflation Rate in Percentage" />
      <div className='w-full'>
        <ChartComponent
          id="area-chart"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
          background='transparent'
        >
          <Inject services={[DateTime, Legend, AreaSeries, SplineAreaSeries]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Area