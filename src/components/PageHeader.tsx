import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center md:py-24">
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
        {title}
      </h1>
      <p className="max-w-2xl text-lg text-white/60">
        {description}
      </p>
    </div>
  );
}