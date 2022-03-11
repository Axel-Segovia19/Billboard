import Chart from './Chart';

const Chartlist = ({ charts, updateChart, deleteChart }) => (
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

export default Chartlist;