"use client";

import React from 'react';

const ImageBreakerSection: React.FC = () => {
  return (
    <section
      className="w-full relative h-[25vh] min-h-[180px] bg-fixed bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/assets/images/RkdboqIfj2HJ3rVGuyHEWVDMrc4.jpg')"
      }}
    >
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
};

export default ImageBreakerSection;