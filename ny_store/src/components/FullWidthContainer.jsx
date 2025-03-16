const FullWidthContainer = ({ children, style }) => {
  const styles = `w-full ${style}`;
  return <div className={styles}>{children}</div>;
};

export default FullWidthContainer;
