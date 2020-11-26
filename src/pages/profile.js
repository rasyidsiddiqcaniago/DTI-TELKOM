import React from 'react';
import './profile.css';
import { rasyid } from '../assets';

const Profile = () => {
  return (
    <div className="profil">
      <h1>Rasyid Siddiq Caniago</h1>
      <img className="saya" alt="saya1" src={rasyid} />
      <p className="cerita">Jadi ini yang namanya Rasyid, yaa saya sendiri.</p>
      <table className="tabel1">
        <tr>
          <td>Ttl</td>
          <td>:Padang, 18 Maret 2000</td>
        </tr>
        <tr>
          <td>Agama</td>
          <td>:Islam</td>
        </tr>
        <tr>
          <td>Asal</td>
          <td>:Medan, Sumatera Utara</td>
        </tr>
        <tr>
          <td>Ketertarikan</td>
          <td>:&#35;IoT &#35;Microcontroller</td>
        </tr>

        <tr>
          <td>Skill</td>
          <td>:&#35;Public Speaking, &#35;Management Source</td>
        </tr>
        <tr>
          <td>Kesibukan</td>
          <td>:Kuliah</td>
        </tr>
      </table>
    </div>
  );
};

export default Profile;
