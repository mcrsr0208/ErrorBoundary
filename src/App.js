import React from "react";
import "./style.css";
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  return (
    <div>
      <ErrorBoundary>
        <Hero heroname = 'rangaswami' />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname = 'swamireddy' />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroname = 'Joker' />
        </ErrorBoundary>
    </div>
  );
}
