const PageContainer = ({ children, style }) => {
  const styles = `max-w-7xl m-auto ${style}`;
  return <div className={styles}>{children}</div>;
};

export default PageContainer;
