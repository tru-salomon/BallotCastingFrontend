import { ColumnDirective, ColumnsDirective, Filter, GridComponent, Group, Page } from "@syncfusion/ej2-react-grids";
import { Inject, Sort } from "@syncfusion/ej2-react-grids";

const ResultGrid = () => {

    const data = [{ Name: 'John', Vote: 100 }, { Name: 'Andrew', Vote: 200 }, { Name: 'Peter', Vote: 300 }, { Name: 'Jessy', Vote: 400 }]

    const sortSettings = { columns: [{ field: 'Vote', direction: 'Descending' }] };


    return (
        <GridComponent dataSource={data} allowPaging={false} allowSorting={true} sortSettings={sortSettings}>
            <ColumnsDirective>
                <ColumnDirective field="Rank" headerText="Rank" width="10%"></ColumnDirective>
                <ColumnDirective field='Name' headerText='Name' width='55%' textAlign="Left"></ColumnDirective>
                <ColumnDirective field='Vote' headerText='Vote' width='25%' textAlign="Left"></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Sort, Filter, Group, Page]} />
        </GridComponent>
    )
}

export default ResultGrid