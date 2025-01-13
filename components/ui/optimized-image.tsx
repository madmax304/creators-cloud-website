import Image from 'next/image'
import { cn } from '@/lib/utils'

interface OptimizedImageProps extends React.ComponentPropsWithoutRef<typeof Image> {
  wrapperClassName?: string
}

export function OptimizedImage({
  wrapperClassName,
  className,
  ...props
}: OptimizedImageProps) {
  return (
    <div className={cn('relative', wrapperClassName)}>
      <Image
        {...props}
        className={cn('object-cover', className)}
        quality={90}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
} 