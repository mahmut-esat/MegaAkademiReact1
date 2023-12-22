import React from 'react';

function Button() {
  return (
    <div className="navbar navbar-expand-lg bg-warning border-dark border-bottom px-5 mb-4">
      <button type="button" class="btn btn-secondary">Anasayfa</button>
      <button type="button" class="btn btn-secondary">Hakkımda</button>
      <button type="button" class="btn btn-secondary">Sertifikalar</button>
      <button type="button" class="btn btn-secondary">İletişim</button>
    </div>
  )
}

export default Button;