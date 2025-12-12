import React from 'react';

export interface SlideData {
  id: number;
  title: string;
  component: React.ReactNode;
}

export interface FinancialMetric {
  year: string;
  revenue: number;
  type: "B2G" | "B2B" | "SaaS";
}

export interface MarketData {
  segment: string;
  value: number;
  color: string;
}