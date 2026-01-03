// filterNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [filterType, setFilterType] = useState(data?.filterType || 'length');
  const [threshold, setThreshold] = useState(data?.threshold || '10');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-filtered`,
          style: { top: '40%' }
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-rejected`,
          style: { top: '60%' }
        }
      ]}
      containerStyle={{ backgroundColor: '#e8f5e9', height: 120 }}
    >
      <label>
        Filter By:
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="length">Length</option>
          <option value="contains">Contains Text</option>
          <option value="startsWith">Starts With</option>
          <option value="regex">Regex Match</option>
        </select>
      </label>
      <label>
        Threshold:
        <input 
          type="text" 
          value={threshold} 
          onChange={(e) => setThreshold(e.target.value)} 
          placeholder="Filter value"
        />
      </label>
    </BaseNode>
  );
}

