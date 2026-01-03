// createNode.js
// Base component for creating consistent node structures

import { Handle, Position } from 'reactflow';

/**
 * BaseNode - A reusable base component for all node types
 * Handles the common structure: container, title, handles, and content
 */
export const BaseNode = ({ 
  id, 
  data, 
  title, 
  handles = [], 
  children,
  containerStyle = {}
}) => {
  const defaultStyle = {
    width: 200,
    height: 80,
    border: '1px solid black',
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    ...containerStyle
  };

  return (
    <div style={defaultStyle}>
      {/* Render all handles */}
      {handles.map((handle, index) => {
        const handleId = typeof handle.id === 'function' 
          ? handle.id(id) 
          : (handle.id || `handle-${index}`);
        
        return (
          <Handle
            key={handleId}
            type={handle.type}
            position={handle.position}
            id={handleId}
            style={handle.style || {}}
          />
        );
      })}

      {/* Title section */}
      {title && (
        <div>
          <span>{title}</span>
        </div>
      )}

      {/* Content section */}
      <div>
        {children}
      </div>
    </div>
  );
};

