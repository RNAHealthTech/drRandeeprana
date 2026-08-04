"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="py-2">
      <ol className="flex items-center space-x-2 text-xs font-medium text-slate-500">
        <li>
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-[#0A6EBB] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <ChevronRight className="w-3.5 h-3.5 text-slate-300 shrink-0" />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#0A6EBB] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#0A6EBB] font-bold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
