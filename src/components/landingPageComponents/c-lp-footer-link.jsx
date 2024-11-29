export default function CLpFooterLink({icon, text, link, action}) {
    return (
        <a href={link} onClick={action} className='g-flex g-vertical-center g-flex-gap6 g-link-behaviour' target="_blank" rel="noopener noreferrer"><img src={icon} alt="github logo" className='lp-github-oxserver lp-footer-content-github' />{text}</a>
    );
}