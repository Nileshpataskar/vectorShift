// transformNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');
  const [customPattern, setCustomPattern] = useState(data?.customPattern || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input`
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-output`
        }
      ]}
      containerStyle={{ backgroundColor: '#e3f2fd' }}
    >
      <label>
        Transform:
        <select value={transformType} onChange={(e) => setTransformType(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="reverse">Reverse</option>
          <option value="trim">Trim</option>
          <option value="custom">Custom Pattern</option>
        </select>
      </label>
      {transformType === 'custom' && (
        <label>
          Pattern:
          <input 
            type="text" 
            value={customPattern} 
            onChange={(e) => setCustomPattern(e.target.value)} 
            placeholder="Regex pattern"
          />
        </label>
      )}
    </BaseNode>
  );
}

