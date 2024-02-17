const OverlayBanner = () => {
  return (
    <div
      className="absolute top-0 bottom-0 w-full bg-red z-1 pointer-events-none"
      style={{
        backgroundColor: 'rgba(6,13,19,0.8)'
      }}
    />
  );
};

export default OverlayBanner;
