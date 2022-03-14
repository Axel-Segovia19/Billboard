import Chart from './Chart.js';

const ChartList = ({ charts, updateChart, deleteChart }) => (
<>
  {charts.map( c =>
    <Chart
      key={c.id}
      {...c}
      updateChart={updateChart}
      deleteChart={deleteChart}
      />
    )}
   </>
)

export default ChartList;