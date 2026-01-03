// splitNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const SplitNode = ({ id, data }) => {
  const [delimiter, setDelimiter] = useState(data?.delimiter || ',');
  const [numOutputs, setNumOutputs] = useState(data?.numOutputs || 2);

  // Generate handles based on numOutputs (max 4)
  const outputHandles = Array.from({ length: Math.min(numOutputs, 4) }, (_, i) => ({
    type: 'source',
    position: Position.Right,
    id: `${id}-output${i + 1}`,
    style: { top: `${((i + 1) * 100) / (Math.min(numOutputs, 4) + 1)}%` }
  }));

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`
    },
    ...outputHandles
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Split"
      handles={handles}
      containerStyle={{ backgroundColor: '#fff3e0', height: 140 }}
    >
      <label>
        Delimiter:
        <input 
          type="text" 
          value={delimiter} 
          onChange={(e) => setDelimiter(e.target.value)} 
          style={{ width: '50px' }}
        />
      </label>
      <label>
        Outputs:
        <select value={numOutputs} onChange={(e) => setNumOutputs(Number(e.target.value))}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </label>
    </BaseNode>
  );
}

