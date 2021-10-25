import { DownloadBtn, Toolbar } from '@h5web/lib';
import { FiDownload } from 'react-icons/fi';

import { useMatrixConfig } from './config';
import { sliceToCsv } from './utils';

function MatrixToolbar() {
  const currentSlice = useMatrixConfig((state) => state.currentSlice);
  if (currentSlice && currentSlice.shape.length > 2) {
    throw new Error('Expected current slice to have at most two dimensions');
  }

  return (
    <Toolbar>
      {currentSlice && (
        <DownloadBtn
          icon={FiDownload}
          label="CSV"
          filename="export.csv"
          getDownloadUrl={() => {
            const data = sliceToCsv(currentSlice);
            return URL.createObjectURL(
              new Blob([data], { type: 'text/csv;charset=utf-8' })
            );
          }}
        />
      )}
    </Toolbar>
  );
}

export default MatrixToolbar;