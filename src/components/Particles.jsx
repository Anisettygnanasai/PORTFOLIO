const Particles = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className="absolute bg-purple-500 rounded-full opacity-20 animate-pulse"
          style={{
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;