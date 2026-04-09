const HeartLogo = () => (
  <a href="#home" className="flex items-center">
    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Heart shape */}
      <path
        d="M24 44C24 44 0 28 0 14C0 6.268 6.268 0 14 0C18.584 0 22.564 2.292 24 5.6C25.436 2.292 29.416 0 34 0C41.732 0 48 6.268 48 14C48 28 24 44 24 44Z"
        fill="hsl(45, 100%, 55%)"
      />
      {/* SAM text */}
      <text
        x="24"
        y="24"
        textAnchor="middle"
        dominantBaseline="central"
        fill="hsl(0, 0%, 4%)"
        fontFamily="'Archivo Black', sans-serif"
        fontSize="14"
        fontWeight="900"
      >
        SAM
      </text>
    </svg>
  </a>
);

export default HeartLogo;
