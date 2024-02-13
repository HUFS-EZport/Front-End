import Image from 'next/image';

function TLIcon({name, logo}) {
    return (
        <Image
            width={ 171 }
            height={ 180 }
            alt={ name }
            src={ logo }
        />
    );
}

export default TLIcon;