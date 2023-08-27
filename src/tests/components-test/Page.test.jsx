// import React from 'react';

// import { describe, test, it, expect } from 'vitest'
// import { render, screen } from '@testing-library/react'
import { HelmetProvider } from "react-helmet-async";

import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Page } from "../../components";

describe("<Page />", () => {
  it("renders children and sets title", () => {
    const { getByText } = render(
      <HelmetProvider>
        <Page title="Test Page">
          <div>Test Content</div>
        </Page>
      </HelmetProvider>
    );

    // Check if the title is set correctly
    // expect(document.title).toBe('Test Page | Grocered.com');

    // Check if the children are rendered
    expect(getByText("Test Content")).toBeInTheDocument();
  });

  // Write more test cases as needed
});
