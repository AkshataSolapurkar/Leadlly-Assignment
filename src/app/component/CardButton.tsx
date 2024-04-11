'use client';
import React from 'react'
import { CustomBtnProps } from '../../../types';
import Image from 'next/image';

const CardButton = ({title,handlebtn,containerstyles,textstyles,rightIcon}:CustomBtnProps) => {
  return (
    <div>
      <button
      type='button'
      onClick={handlebtn}
      disabled={false}
      className={`custom-btn ${containerstyles}`}
      ><span className={`flex-1 text-green-900 ${textstyles}`}>{title}</span>
      </button>
    </div>
  )
}

export default CardButton
