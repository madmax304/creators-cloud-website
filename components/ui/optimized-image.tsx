import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends Omit<React.ComponentPropsWithoutRef<typeof Image>, 'alt'> {
  wrapperClassName?: string
  alt: string
}

export function OptimizedImage({
  wrapperClassName,
  className,
  alt,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn('relative', wrapperClassName)}>
      <Image
        {...props}
        alt={alt}
        className={cn('object-cover', className)}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
} 