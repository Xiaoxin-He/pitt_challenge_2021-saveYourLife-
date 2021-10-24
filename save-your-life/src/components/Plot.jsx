import { Line, G2 } from '@antv/g2plot';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const annotations = {
  weight: ({ under, over }) => [
    // mark underweight and overweight
    {
      type: 'regionFilter',
      start: ['min', under],
      end: ['max', '0'],
      color: '#F4664A'
    },
    {
      type: 'regionFilter',
      start: ['min', over],
      end: ['max', 'max'],
      color: '#F4664A'
    },
    {
      type: 'text',
      position: ['min', under],
      content: 'Underweight',
      offsetY: -4,
      style: {
        textBaseline: 'bottom'
      }
    },
    {
      type: 'line',
      start: ['min', under],
      end: ['max', under],
      style: {
        stroke: '#F4664A',
        lineDash: [2, 2]
      }
    },
    {
      type: 'text',
      position: ['min', over],
      content: 'Overweight',
      offsetY: -4,
      style: {
        textBaseline: 'bottom'
      }
    },
    {
      type: 'line',
      start: ['min', over],
      end: ['max', over],
      style: {
        stroke: '#F4664A',
        lineDash: [2, 2]
      }
    }
  ]
};

export default function Plot({ type, extra }) {
  // prettier-ignore
  const data = useSelector(state => state.userInfo.weight)
  type = 'weight';
  extra = {
    under: 115,
    over: 156
  };
  const [eleId, setEleId] = useState(() => `ele-${Math.random()}`);
  const [plot, setPlot] = useState(null);

  useEffect(() => {
    if (plot !== null) {
      plot.changeData([...data])
      return
    }
    const line = new Line(eleId, {
      data: [...data],
      padding: 'auto',
      xField: 'Date',
      yField: 'value',
      color: '#199083',
      xAxis: {
        title: {
          text: "Date"
        }
      },
      yAxis: {
        title: {
          text: "Weight(lb.)"
        }
      },
      annotations: annotations[type](extra)
    });

    line.render();
    setPlot(line);
    // eslint-disable-next-line
  }, [data, eleId, extra, type]);

  return (
    <div
      className="plot-container"
      style={{
        height: '100%'
      }}
    >
      <div
        id={eleId}
        className="plot"
        style={{
          height: '100%'
        }}
      ></div>
    </div>
  );
}
