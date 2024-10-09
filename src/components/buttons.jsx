"use client";

import React from "react";
import { ButtonsCard } from "./ui/tailwindcss-button";

export function Buttons() {
  return (
        <ButtonsCard>
          {buttons[0].component}
        </ButtonsCard>
  );
}

export const buttons = [
  {
    name: "Next.js Dark",
    description: "Next.js button styled for dark backgrounds",
    component: (
      <button
        className="shadow-[0_4px_14px_0_rgba(255,255,255,0.1)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.15)] px-8 py-2 text-white rounded-md font-light transition duration-200 ease-linear hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
      >
        Let's go to home
      </button>
    ),
  },
];