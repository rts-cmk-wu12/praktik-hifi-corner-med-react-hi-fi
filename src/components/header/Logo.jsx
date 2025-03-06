import './Logo.scss';

export default function Logo() {

    return (
        <section className="logo-section">
            <h1 className="logo">
                <div className='logo__container'>
                    <p className='logo__text'>Hi<span className='line-break'></span>Fi</p>
                </div>
                <p className="logo__url">hificorner.co.uk</p>
            </h1>
        </section>
    )
}