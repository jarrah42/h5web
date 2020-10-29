import React, { ReactElement } from 'react';
import styles from './RawVis.module.css';
import type { HDF5Value } from '../providers/models';

interface Props {
  value: HDF5Value;
}

function RawVis(props: Props): ReactElement {
  const { value } = props;
  return <pre className={styles.raw}>{JSON.stringify(value, null, 2)}</pre>;
}

export default RawVis;
