import Facebook from '../../vectors/Facebook';
import Instagram from '../../vectors/Instagram';
import Youtube from '../../vectors/Youtube'

const Socials = ({
    className
}) => (
<ul className={`flex gap-3 ${className ? className : ''}`}>
    <li>
        <a href="https://www.facebook.com/BabalonSalon" target="_blank" title="Babalon Salon on Facebook">
           <Facebook className="h-7 w-7" />
        </a>
    </li>
    <li>
        <a href="https://instagram.com/babalonsalon93" target="_blank" title="Babalon Salon on Instragram">
            <Instagram className="h-7 w-7" />
        </a>
    </li>
    <li>
        <a href="https://youtube.com/@babalonsalon3660" target="_blank" title="Babalon Salon on YouTube">
             <Youtube className="h-7 w-7" />
        </a>
    </li>
</ul>
);

export default Socials;
