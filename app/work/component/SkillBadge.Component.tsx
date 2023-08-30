import React from 'react'
import { Icon } from "@iconify/react";
import { classNames } from '@/app/lib/util';

export const SkillBadge = ({iconType, name, classes}: {iconType?: string, name: string, classes?: string}) => {
  return (
    <div className={classNames('inline-flex items-center border gap-1 rounded-md px-1.5 py-0.5', classes)}>
      {iconType ? <Icon icon={`skill-icons:${iconType}`} className='w-4 h-4' /> : <span className='h-4 w-4 rounded-md bg-blue-400' /> }
      <p className='text-sm'>{name}</p>
    </div>
  )
}
