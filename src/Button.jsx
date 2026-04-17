import React from 'react';

export function Button({ label, variant = 'primary', onClick }) {
  const styles = {
    primary: { background: '#1ea7fd', color: '#fff' },
    secondary: { background: 'transparent', color: '#333', border: '1px solid #333' },
    danger: { background: '#e74c3c', color: '#fff' },
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'sans-serif',
        fontSize: '14px',
        fontWeight: 700,
        ...styles[variant],
      }}
    >
      {label}
    </button>
  );
}
