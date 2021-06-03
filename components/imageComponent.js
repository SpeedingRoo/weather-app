import Image from 'next/image';

ImageComponent = ()=>(
    <Image
      src="/images/profile.jpg"
      height={500}
      width={500}
      alt="My profile picture"
    />
)

export default ImageComponent;