import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...rest
}) => {
  return (
    <>
      <button
        className={`btn btn-${variant} btn-${size} custom-btn w-auto ${className}`}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>

      {/* CSS BELOW (same page) */}
      <style>{`
        /* Basic Button Style */
        .custom-btn {
          border-radius: 6px;
          font-weight: 600;
          text-transform: capitalize;
          transition: 0.25s ease;
        }

        /* Sizes */
        .btn-lg {
          padding: 12px 28px;
          font-size: 1.1rem;
        }

        .btn-md {
          padding: 10px 22px;
        }

        .btn-sm {
          padding: 6px 16px;
          font-size: 0.9rem;
        }

        /* --------------------------
           CUSTOM COLOR VARIANTS
        ---------------------------*/

        /* PRIMARY (#174C63) */
        .btn-primary {
          background: #174C63;
          border-color: #174C63;
          color: #fff;
        }
        .btn-primary:hover {
          background: #133e50;
          border-color: #133e50;
        }

        /* WHITE BUTTON */
        .btn-white {
          background: #ffffff;
          border: 1px solid #d1d1d1;
          color: #D0474F;
        }
        .btn-white:hover {
          background: #f3f3f3;
        }

        /* SUCCESS / GREEN (#09B200) */
        .btn-success {
          background: #09B200;
          border-color: #09B200;
          color: #fff;
        }
        .btn-success:hover {
          background: #089a00;
          border-color: #089a00;
        }

      `}</style>
    </>
  );
};

export default Button;
