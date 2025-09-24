// components/QRCodeGenerator.jsx
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = ({ value, size = 200 }) => {
  const [qrDataUrl, setQrDataUrl] const [qrDataUrl, setQrDataUrl] = useState('');

  useEffect(() => {
    if (value) {
      QRCode.toDataURL(value, {
        width: size,
        margin: 1,
        color: {
          dark: '#000000',
          light: '#ffffff'
        }
      })
        .then(url => setQrDataUrl(url))
        .catch(err => console.error('QR Code generation error:', err));
    }
  }, [value, size]);

  return (
    <div className="text-center">
      {qrDataUrl ? (
        <img
          src={qrDataUrl}
          alt="QR Code"
          className="img-fluid border rounded"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      ) : (
        <div className="text-muted">Generating QR code...</div>
      )}
    </div>
  );
};

export default QRCodeGenerator;