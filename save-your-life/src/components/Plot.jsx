import { Line, G2 } from '@antv/g2plot';
import { useEffect, useState } from 'react';

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

export default function Plot({ data, type, extra }) {
  // prettier-ignore
  data = [{"Date":"2020-1-0","value":115.30175125895816},{"Date":"2020-1-1","value":163.32738551692154},{"Date":"2020-1-2","value":143.72903651506255},{"Date":"2020-1-3","value":153.16669745040647},{"Date":"2020-1-4","value":170.13255244588305},{"Date":"2020-1-5","value":120.99146281873746},{"Date":"2020-1-6","value":132.21058503989892},{"Date":"2020-1-7","value":115.10682539685915},{"Date":"2020-1-8","value":121.25232172266287},{"Date":"2020-1-9","value":114.59809522620864},{"Date":"2020-1-10","value":178.45490402446566},{"Date":"2020-1-11","value":174.31450934943956},{"Date":"2020-1-12","value":178.05266197836607},{"Date":"2020-1-13","value":156.52638915586897},{"Date":"2020-1-14","value":118.59785402741892},{"Date":"2020-1-15","value":119.05013634192939},{"Date":"2020-1-16","value":185.46259842994337},{"Date":"2020-1-17","value":170.30557801787404},{"Date":"2020-1-18","value":179.19143605644797},{"Date":"2020-1-19","value":156.38034380870658},{"Date":"2020-1-20","value":162.3435776862105},{"Date":"2020-1-21","value":138.81744798771575},{"Date":"2020-1-22","value":156.89819743331464},{"Date":"2020-1-23","value":179.43013265860776},{"Date":"2020-1-24","value":148.3065242568743},{"Date":"2020-1-25","value":177.4651188907779},{"Date":"2020-1-26","value":186.6906485007284},{"Date":"2020-2-0","value":187.15976552612148},{"Date":"2020-2-1","value":161.7777695579421},{"Date":"2020-2-2","value":173.3200130528657},{"Date":"2020-2-3","value":129.70635712625008},{"Date":"2020-2-4","value":143.98998831694394},{"Date":"2020-2-5","value":189.94449302921862},{"Date":"2020-2-6","value":142.65551549981987},{"Date":"2020-2-7","value":165.91298242190712},{"Date":"2020-2-8","value":170.54699045911258},{"Date":"2020-2-9","value":172.7438710600908},{"Date":"2020-2-10","value":165.8522485100471},{"Date":"2020-2-11","value":123.81918274877519},{"Date":"2020-2-12","value":165.9624784286625},{"Date":"2020-2-13","value":160.17101400688614},{"Date":"2020-2-14","value":120.80685974889845},{"Date":"2020-2-15","value":130.49267543643194},{"Date":"2020-2-16","value":166.44586412805523},{"Date":"2020-2-17","value":156.53153783950208},{"Date":"2020-2-18","value":148.96498072759516},{"Date":"2020-2-19","value":110.99848670524784},{"Date":"2020-2-20","value":165.07157145933388},{"Date":"2020-2-21","value":112.7006982149604},{"Date":"2020-2-22","value":112.39885088808924},{"Date":"2020-2-23","value":177.01306199543308},{"Date":"2020-2-24","value":137.4695923265637},{"Date":"2020-2-25","value":137.6756558232113},{"Date":"2020-2-26","value":129.15909000320735},{"Date":"2020-3-0","value":150.2040280925331},{"Date":"2020-3-1","value":162.82946664457728},{"Date":"2020-3-2","value":155.21395418874158},{"Date":"2020-3-3","value":185.59457571328278},{"Date":"2020-3-4","value":116.39787156851784},{"Date":"2020-3-5","value":139.62999087971227},{"Date":"2020-3-6","value":174.49056167029073},{"Date":"2020-3-7","value":175.4333139183248},{"Date":"2020-3-8","value":120.05430456485576},{"Date":"2020-3-9","value":121.66564777879329},{"Date":"2020-3-10","value":186.3015264764843},{"Date":"2020-3-11","value":132.4797114196212},{"Date":"2020-3-12","value":115.69531090507807},{"Date":"2020-3-13","value":143.65641826378408},{"Date":"2020-3-14","value":168.61321218384683},{"Date":"2020-3-15","value":142.5989028971223},{"Date":"2020-3-16","value":138.5613492404673},{"Date":"2020-3-17","value":142.67470701531656},{"Date":"2020-3-18","value":148.14283646249285},{"Date":"2020-3-19","value":187.9957572777611},{"Date":"2020-3-20","value":180.71788198617722},{"Date":"2020-3-21","value":147.92140374006635},{"Date":"2020-3-22","value":134.73454312245178},{"Date":"2020-3-23","value":168.9425043345678},{"Date":"2020-3-24","value":127.06461687107932},{"Date":"2020-3-25","value":188.93240416710768},{"Date":"2020-3-26","value":118.25500310924552},{"Date":"2020-4-0","value":179.9253008231871},{"Date":"2020-4-1","value":131.19267964646053},{"Date":"2020-4-2","value":136.73861300628172},{"Date":"2020-4-3","value":167.66472513899598},{"Date":"2020-4-4","value":166.76298471909766},{"Date":"2020-4-5","value":141.26199160398386},{"Date":"2020-4-6","value":157.69890103714158},{"Date":"2020-4-7","value":133.6094733757985},{"Date":"2020-4-8","value":147.94090905332789},{"Date":"2020-4-9","value":148.50074089452832},{"Date":"2020-4-10","value":147.30921228318613},{"Date":"2020-4-11","value":114.522800526088},{"Date":"2020-4-12","value":128.87331267812948},{"Date":"2020-4-13","value":118.22995335939814},{"Date":"2020-4-14","value":143.12656686432396},{"Date":"2020-4-15","value":170.82006166852898},{"Date":"2020-4-16","value":187.58260074500703},{"Date":"2020-4-17","value":111.73530814498741},{"Date":"2020-4-18","value":122.8346713208052}];
  type = 'weight';
  extra = {
    under: 120,
    over: 170
  };
  const [eleId, setEleId] = useState(() => `ele-${Math.random()}`);

  useEffect(() => {
    const line = new Line(eleId, {
      data,
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
