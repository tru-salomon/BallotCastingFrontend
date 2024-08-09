import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Tooltip, DataLabel, ColumnSeries, Category } from '@syncfusion/ej2-react-charts';
import { DashboardLayoutComponent, PanelsDirective, PanelDirective } from '@syncfusion/ej2-react-layouts';

const Columnchart = () => {



    const Chart = () => {

        let data = [
            { x: "Mon", y: 11 },
            { x: "Tue", y: 13 },
            { x: "Wed", y: 11 },
            { x: "Thu", y: 6 },
            { x: "Fri", y: 14 },
            { x: "Sat", y: 13 },
        ];
        return (
            <ChartComponent id="chart" primaryXAxis={{ valueType: 'Category' }} title="Weekly Sales" legendSettings={{ visible: true }} tooltip={{ enable: true }} width='90%' height='90%'>
                <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, Category]} />
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={data} xName='x' yName='y' type='Column'>
                    </SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        )

    }

        return(
        <DashboardLayoutComponent allowResizing={false} columns={1} cellAspectRatio={100 / 50}>
                <PanelsDirective>
                    <PanelDirective sizeX={1} sizeY={1} row={0} col={0} content={Chart} >
                    </PanelDirective>
                </PanelsDirective>
        </DashboardLayoutComponent >
    );

}

export default Columnchart