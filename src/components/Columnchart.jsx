import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, DataLabel, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';

const Columnchart = () => {

    const data = [
        { x: "Mon", y: 11 },
        { x: "Tue", y: 13 },
        { x: "Wed", y: 11 },
        { x: "Thu", y: 6 },
        { x: "Fri", y: 14 },
        { x: "Sat", y: 13 },
    ];

    return (
        <ChartComponent id="charts"
            primaryXAxis={{ valueType: 'Category', minorGridLines: { width: 0 }, majorGridLines: { width: 0 } }}
            primaryYAxis={{ labelFormat: '', minorGridLines: { width: 0 }, majorGridLines: { width: 0 } }}
            title=""
            legendSettings={{ visible: false }}
            tooltip={{ enable: true }}
            width='80%' height='95%'
            border={{ width: 0, color: 'transparent' }}>
            <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
            <SeriesCollectionDirective>
                <SeriesDirective dataSource={data} xName='x'
                    yName='y'
                    type='Column'
                    name='Ballot'
                    fill='blue'
                    columnSpacing='0.2'
                    columnWidth='0.4'
                    dataLabel={{ visible: true, position: "Middle" }} >
                </SeriesDirective>
            </SeriesCollectionDirective>
        </ChartComponent>
    );

}

export default Columnchart