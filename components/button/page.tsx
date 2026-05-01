'use client';
import { Button } from "@/components/ui/button"

export function MainButton({ label, onClick, leftIcon, rightIcon, variant, size, className }: MainButtonProps) {
  return (
    <Button variant={variant} size={size} onClick={onClick} className={`hover:bg-primary/90 hover:cursor-pointer ${className || ''}`}>
      {leftIcon ?? leftIcon}
      {label}
      {rightIcon ?? rightIcon}
    </Button>
  )
}
