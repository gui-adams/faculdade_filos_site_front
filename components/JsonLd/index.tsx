import React from "react";

type Props = { json: unknown };

/**
 * Renderiza JSON-LD (schema.org) no <head>.
 * Pode ser usado em Server Components sem 'use client'.
 */
export default function JsonLd({ json }: Props) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}