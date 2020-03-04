import React, { useState } from 'react';
import { Tree, TreeNode } from './models';

import styles from './TreeView.module.css';

type ExpandedNodes = Record<string, boolean>;

interface Props<T> {
  nodes: Tree<T>;
  selectedNode?: TreeNode<T>;
  isRoot?: boolean;
  onSelect: (node: TreeNode<T>) => void;
  renderIcon: (data: T, isBranch: boolean, isExpanded: boolean) => JSX.Element;
}

function TreeView<T>(props: Props<T>): JSX.Element {
  const { nodes, selectedNode, isRoot, onSelect, renderIcon } = props;
  const [expandedNodes, setExpandedNodes] = useState<ExpandedNodes>({});

  return (
    <ul className={styles.group} role={isRoot ? 'tree' : 'group'}>
      {nodes.map(node => {
        const { uid, label, level, data, children } = node;
        const isBranch = !!children;
        const isExpanded = !!expandedNodes[node.uid];

        return (
          <li
            key={uid}
            style={{ '--level': level } as React.CSSProperties}
            role="none"
          >
            <button
              className={styles.btn}
              type="button"
              role="treeitem"
              aria-expanded={isExpanded}
              aria-selected={node === selectedNode}
              onClick={() => {
                onSelect(node);

                if (isBranch) {
                  setExpandedNodes({
                    ...expandedNodes,
                    [node.uid]: !isExpanded,
                  });
                }
              }}
            >
              {renderIcon(data, isBranch, isExpanded)}
              {label}
            </button>

            {children && isExpanded && (
              <TreeView
                nodes={children}
                selectedNode={selectedNode}
                onSelect={onSelect}
                renderIcon={renderIcon}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TreeView;