import { JSX, ReactNode } from 'react';
import '../home/bio/tabs/skills.css';

export default function Tag({ children, color, className, style }: { children: ReactNode, color: string, className?: string, style?: { [key: string]: string } }): JSX.Element {
  return (
    <div
      className={`py-0.5 px-2.5 rounded-full text-white text-sm ${color} ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}