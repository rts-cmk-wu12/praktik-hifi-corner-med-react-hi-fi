import { Link } from 'react-router';
import './BrandsText.scss';
import { GiUsaFlag } from "react-icons/gi";
import { PiBombFill } from "react-icons/pi";
import { GiDna2 } from "react-icons/gi";
import { IoVideocamSharp } from "react-icons/io5";
import { LiaGgCircle } from "react-icons/lia";
import { MdCheckCircle } from "react-icons/md";
import { IoCaretBackCircle } from "react-icons/io5";
import { MdRemoveCircleOutline } from "react-icons/md";
import { SiSennheiser } from "react-icons/si";
import { SiYamahamotorcorporation } from "react-icons/si";

export default function BrandsText() {

    return (
        <div className='brands-text'>
            <section className="brands-text__left">
                <p className="brands-text__left-text">Here are just a few of the brands we stock:</p>
                <div className="brands-text__icon-container">
                    <a href="#" className="brands-text__icon uppercase">Arcam</a>
                    <a href="#" className="brands-text__icon uppercase"><GiUsaFlag />Audiolab</a>
                    <a href="#" className="brands-text__icon">Bowers & Wilkins</a>
                    <a href="#" className="brands-text__icon uppercase">The Chord Company</a>
                    <a href="#" className="brands-text__icon uppercase"><PiBombFill /> Devialet</a>
                    <a href="#" className="brands-text__icon uppercase"><GiDna2 /> Focal The spirit of sound</a>
                    <a href="#" className="brands-text__icon">Harbeth</a>
                    <a href="#" className="brands-text__icon uppercase"><IoVideocamSharp />Kef</a>
                    <a href="#" className="brands-text__icon uppercase"><LiaGgCircle /> Linn</a>
                    <a href="#" className="brands-text__icon lowercase">Marantz</a>
                    <a href="#" className="brands-text__icon lowercase">Naim</a>
                    <a href="#" className="brands-text__icon lowercase">Oppo</a>
                    <a href="#" className="brands-text__icon"><MdCheckCircle /> PrimaLuna</a>
                    <a href="#" className="brands-text__icon"><IoCaretBackCircle /> Pro-Ject</a>
                    <a href="#" className="brands-text__icon uppercase">Quad</a>
                    <a href="#" className="brands-text__icon uppercase">Rotel</a>
                    <a href="#" className="brands-text__icon"><MdRemoveCircleOutline /></a>
                    <a href="#" className="brands-text__icon uppercase"><SiSennheiser /> Sennheiser</a>
                    <a href="#" className="brands-text__icon uppercase">Spendor</a>
                    <a href="#" className="brands-text__icon">Technics</a>
                    <a href="#" className="brands-text__icon uppercase"><SiYamahamotorcorporation /> Yamaha</a>
                </div>
            </section>
            <section className="brands-text__right">
                <h3 className="brands-text__right-subheading">Brands</h3>
                <p className="brands-text__text">As an independent retailer of home audio and visual products, we are able to select the very best brands and manufacturers from across the world.</p>
                <p className="brands-text__text">Not only do we have the best known brands such as B&W, Devialet, KEF, Naim, and Linn; we also stock and are well versified with smaller autonomous companies like Michell Engineering, Neat Acoustics, Harbeth, SME, Trichord Research, PrimaLuna, to name but a few.</p>
                <p className="brands-text__text">With over a hundred brands, we can happily say that if a brand meets our high standards for sound reproduction, then you can be assured to find it at Hi-Fi Corner.</p>
                <Link to="/shop" className="brands-text__link">Visit our shop to find more brands&gt;</Link>
            </section>
        </div>
    )
}