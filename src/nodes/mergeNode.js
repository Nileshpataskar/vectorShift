// mergeNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="Merge"
      handles={[
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input1`,
          style: { top: '25%' }
        },
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input2`,
          style: { top: '50%' }
        },
        {
          type: 'target',
          position: Position.Left,
          id: `${id}-input3`,
          style: { top: '75%' }
        },
        {
          type: 'source',
          position: Position.Right,
          id: `${id}-merged`
        }
      ]}
      containerStyle={{ backgroundColor: '#f3e5f5', height: 120 }}
    >
      <span>Merges up to 3 inputs into a single output</span>
    </BaseNode>
  );
}

