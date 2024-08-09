import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationDataLabel, AccumulationSeriesDirective, AccumulationLegend, PieSeries, Inject } from "@syncfusion/ej2-react-charts";
import { DashboardLayoutComponent, PanelsDirective, PanelDirective } from "@syncfusion/ej2-react-layouts";

const Piechart = () => {

    const Chart = () => {
        const data = [
            { x: "Chrome", y: 37 },
            { x: "Firefox", y: 36 },
            { x: "IE", y: 12 },
            { x: "Safari", y: 11 },
            { x: "Edge", y: 4 }
        ];

        return (
            <AccumulationChartComponent id="charts" enableSmartLabels={true} enableAnimation={true} legendSettings={{ visible: true }} width='95%' height='90%'>
                <Inject services={[PieSeries, AccumulationDataLabel, AccumulationLegend]} />
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' type='Pie' dataLabel={{ visible: true, position: 'Inside' }} >
                    </AccumulationSeriesDirective>
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        )
    }
    
    
    
    return (
        <DashboardLayoutComponent allowResizing={false} columns={1} cellAspectRatio={100 / 50}>
            <PanelsDirective>
                <PanelDirective sizeX={1} sizeY={1} row={0} col={0} content={Chart} >
                </PanelDirective>
            </PanelsDirective>
        </DashboardLayoutComponent >
       
    );
}
    export default Piechart