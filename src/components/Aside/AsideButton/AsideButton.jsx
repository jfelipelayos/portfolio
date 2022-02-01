import React from 'react';
import './AsideButton.css';
import { useNavigate } from "react-router-dom";

function AsideButton({ title, text, icon, link }) {

  let navigate = useNavigate();

  async function handleClick() {
    navigate({ link }, { replace: true });
  }

  return (
    <a href={link} target='_blank' rel='noreferrer' className='aside-btn-link'>
      <button className='aside-btn btn' onClick={() => { handleClick() }}>
        <h3 className='aside-btn-title'>{title}</h3>
        <h4 className='aside-btn-text'>{text}</h4>
        <span><img src={icon} alt={`${title} icon`} className='aside-btn-icon' /></span>
      </button>
    </a>
  )
}

export default AsideButton;
