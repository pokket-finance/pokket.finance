import NextProgressBar from 'nextjs-progressbar';

function PageLoader() {
  return (
    <NextProgressBar
      color="#2601cf"
      startPosition={0.3}
      stopDelayMs={200}
      height={3}
    />
  );
}

export default PageLoader;
