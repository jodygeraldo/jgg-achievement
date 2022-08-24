const storagePublicUrl =
  'https://zgdynxzpcpwowgbwrwik.supabase.co/storage/v1/object/public/tm-image'

export default function Image({
  src,
  alt,
  width,
  height,
  ...props
}: React.ComponentPropsWithoutRef<'img'>) {
  return (
    <img
      src={`//images.weserv.nl/?url=${storagePublicUrl}${src}&w=${width}&h=${height}&output=webp`}
      alt={alt}
      width={width}
      height={height}
      {...props}
    />
  )
}
