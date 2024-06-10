// src/Button.tsx
import * as React from "react";
import { Primitive } from "@radix-ui/react-primitive";

type ButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button> & {
  children: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <Primitive.button
        ref={ref}
        {...props}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.2s",
          ...props.style,
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = "#0056b3";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLButtonElement).style.backgroundColor = "#007bff";
        }}
      >
        {children}
      </Primitive.button>
    );
  }
);

export default Button;
