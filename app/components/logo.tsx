import Blue from '@/public/assets/images/logo/blue.svg';
import Yellow from '@/public/assets/images/logo/Yellow.svg';
import Green from '@/public/assets/images/logo/Green.svg';
import Red from '@/public/assets/images/logo/Red.svg';

interface LogoProps {
    class: string;
}


export default function Logo(props:LogoProps ){
    return(
        <div className="flex flex-row justify-center items-center gap-1 mr-4">
        <img src="/assets/images/logo/blue.svg"  className={props.class} />
        <img src="/assets/images/logo/Yellow.svg" className={props.class} />
        <img src="/assets/images/logo/Green.svg" className={props.class} />
        <img src="/assets/images/logo/Red.svg" className={props.class} />
      </div>

    );
}
